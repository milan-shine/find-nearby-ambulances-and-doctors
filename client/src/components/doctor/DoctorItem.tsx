import React from 'react'
import { Doctor } from './DoctorList'
import styled from 'styled-components';
import { Button } from '../Button';
import { EditIcon, TrashIcon } from 'lucide-react';
import axios from 'axios';

type DoctorItemProps = {
    doctor: Doctor,
    isManaging: boolean,
    handleEditItem?: (doctor: Doctor) => void,
    setRefetch?: React.Dispatch<React.SetStateAction<boolean>>
}

const DoctorItem: React.FC<DoctorItemProps> = ({ doctor, isManaging, handleEditItem, setRefetch }) => {

    const handleDoctorItemDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/doctors/${doctor.id}`);

            if (setRefetch) {
                setRefetch(true);
            }
        } catch (err) {
            console.error("Error deleting Doctor:", err);
        }
    }

    const handleDoctorItemEdit = (doctor: Doctor) => {
        if (handleEditItem) {
            handleEditItem(doctor);
        }
    }
    return (
        <StyledDiv>
            <DoctorDetails>
                <h3>{doctor.title}</h3>
                <p>{doctor.description}</p>
                <p>Location: {doctor.location}</p>
            </DoctorDetails>
            <img src={doctor.image ? doctor.image : ''} alt={doctor.title} height={100} />
            {isManaging ? <ActionButtonContainer>
                <Button onClick={handleDoctorItemDelete}>
                    <TrashIcon size={20} />
                </Button>
                <Button onClick={() => handleDoctorItemEdit(doctor)}>
                    <EditIcon size={20} />
                </Button>
            </ActionButtonContainer> : null}
        </StyledDiv>
    )
}

export default DoctorItem;


const StyledDiv = styled.div`
  margin-bottom: 15px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DoctorDetails = styled.div``

const ActionButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`