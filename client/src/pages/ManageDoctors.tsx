import React, { useState } from 'react'
import Container from '../components/Container';
import Header from '../components/Header';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import DoctorList, { Doctor } from '../components/doctor/DoctorList';
import DoctorForm from '../components/doctor/DoctorForm';
import axios from 'axios';

const ManageDoctors: React.FC = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState<Doctor | undefined>(undefined);
    const [refetch, setRefetch] = useState(false);

    const handleOpenModal = (doctor?: Doctor) => {
        setIsModalOpen(true);
        setEditingDoctor(doctor);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingDoctor(undefined);
    };

    const uploadToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_COUDINARY_UPLOAD_PRESET);

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_COUDINARY_CLOUD_NAME}/auto/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );


        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        console.log('Upload response:', data);
        return data.secure_url;
    };

    const handleSubmit = async (data: Doctor, file: File | null) => {
        try {
            let imageUrl = data.image;
            if (file) {
                imageUrl = await uploadToCloudinary(file);
            }

            const updatedData = { ...data, image: imageUrl };

            let response;
            if (editingDoctor) {
                response = await axios.put(`${import.meta.env.VITE_API_URL}/api/doctors/${editingDoctor.id}`, updatedData);
            } else {
                response = await axios.post(`${import.meta.env.VITE_API_URL}/api/doctors`, updatedData);
            }

            console.log('API response:', response.data);
            setRefetch(true);
            handleCloseModal();
        } catch (error) {
            console.error('Error handling doctor submission:', error);
            // TODO: show error massage to user
        }
    };
    return (
        <>
            <Container>
                <Header title='Doctors' >
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/doctors')}>Doctors</Button>
                    <Button onClick={() => handleOpenModal()}>Create Doctors</Button>
                </Header>
                <DoctorList refetch={refetch} setRefetch={setRefetch} isManaging={true} handleEditItem={handleOpenModal} />
                {isModalOpen ? <Modal onClose={handleCloseModal} title={editingDoctor ? 'Edit Doctor' : 'Add Doctor'}>
                    <DoctorForm doctor={editingDoctor} onSubmit={handleSubmit} />
                </Modal> : null}
            </Container>
        </>
    )
}

export default ManageDoctors;

