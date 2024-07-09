import React from 'react'
import { Ambulance } from './AmbulanceList'
import styled from 'styled-components';
import { Button } from '../Button';
import { EditIcon, TrashIcon } from 'lucide-react';
import axios from 'axios';
import defaultAmbulance from "../../assets/ambulance.jpg"

type AmbulanceItemProps = {
    ambulance: Ambulance,
    isManaging: boolean,
    handleEditItem?: (ambulance: Ambulance) => void,
    setRefetch?: React.Dispatch<React.SetStateAction<boolean>>
}

const AmbulanceItem: React.FC<AmbulanceItemProps> = ({ ambulance, isManaging, handleEditItem, setRefetch }) => {

    const handleAmbulanceItemDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/ambulances/${ambulance.id}`);

            if (setRefetch) {
                setRefetch(true);
            }
        } catch (err) {
            console.error("Error deleting Ambulance:", err);
        }
    }

    const handleAmbulanceItemEdit = (ambulance: Ambulance) => {
        if (handleEditItem) {
            handleEditItem(ambulance);
        }
    }
    return (
        <StyledDiv>
            <AmbulanceDetails>
                <h3>{ambulance.title}</h3>
                <p>{ambulance.description}</p>
                <p>Location: {ambulance.location}</p>
            </AmbulanceDetails>
            <img src={ambulance.image ? ambulance.image : defaultAmbulance} alt={ambulance.title} height={100} />
            {isManaging ? <ActionButtonContainer>
                <Button onClick={handleAmbulanceItemDelete}>
                    <TrashIcon size={20} />
                </Button>
                <Button onClick={() => handleAmbulanceItemEdit(ambulance)}>
                    <EditIcon size={20} />
                </Button>
            </ActionButtonContainer> : null}
        </StyledDiv>
    )
}

export default AmbulanceItem;


const StyledDiv = styled.div`
  margin-bottom: 15px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmbulanceDetails = styled.div``

const ActionButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`