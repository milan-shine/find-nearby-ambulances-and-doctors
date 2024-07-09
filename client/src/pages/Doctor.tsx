import React from 'react'
import Header from '../components/Header';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import DoctorList from '../components/doctor/DoctorList';
import Container from '../components/Container';

const Doctor: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Header title='Doctors' >
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/doctors/manage')}>Manage Doctors</Button>
                </Header>
                <DoctorList />
            </Container>
        </>
    )
}

export default Doctor;
