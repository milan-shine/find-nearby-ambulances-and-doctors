import React from 'react'
import Header from '../components/Header';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import AmbulanceList from '../components/ambulance/AmbulanceList';
import Container from '../components/Container';

const Ambulance: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Header title='Ambulances' >
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/ambulances/manage')}>Manage Ambulances</Button>
                </Header>
                <AmbulanceList />
            </Container>
        </>
    )
}

export default Ambulance;
