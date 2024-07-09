import React, { useState } from 'react'
import Container from '../components/Container';
import Header from '../components/Header';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import AmbulanceList, { Ambulance } from '../components/ambulance/AmbulanceList';
import AmbulanceForm from '../components/ambulance/AmbulanceForm';
import axios from 'axios';

const ManageAmbulances: React.FC = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAmbulance, setEditingAmbulance] = useState<Ambulance | undefined>(undefined);
    const [refetch, setRefetch] = useState(false);

    const handleOpenModal = (ambulance?: Ambulance) => {
        setIsModalOpen(true);
        setEditingAmbulance(ambulance);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingAmbulance(undefined);
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

    const handleSubmit = async (data: Ambulance, file: File | null) => {
        try {
            let imageUrl = data.image;
            if (file) {
                imageUrl = await uploadToCloudinary(file);
            }

            const updatedData = { ...data, image: imageUrl };

            let response;
            if (editingAmbulance) {
                response = await axios.put(`${import.meta.env.VITE_API_URL}/api/ambulances/${editingAmbulance.id}`, updatedData);
            } else {
                response = await axios.post(`${import.meta.env.VITE_API_URL}/api/ambulances`, updatedData);
            }

            console.log('API response:', response.data);
            setRefetch(true);
            handleCloseModal();
        } catch (error) {
            console.error('Error handling ambulance submission:', error);
            // TODO: show error massage to user
        }
    };
    return (
        <>
            <Container>
                <Header title='Ambulances' >
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/ambulances')}>Ambulances</Button>
                    <Button onClick={() => handleOpenModal()}>Create Ambulances</Button>
                </Header>
                <AmbulanceList refetch={refetch} setRefetch={setRefetch} isManaging={true} handleEditItem={handleOpenModal} />
                {isModalOpen ? <Modal onClose={handleCloseModal} title={editingAmbulance ? 'Edit Ambulance' : 'Add Ambulance'}>
                    <AmbulanceForm ambulance={editingAmbulance} onSubmit={handleSubmit} />
                </Modal> : null}
            </Container>
        </>
    )
}

export default ManageAmbulances;

