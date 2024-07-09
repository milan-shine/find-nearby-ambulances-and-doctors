import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Header title='Home'>
                    <Button onClick={() => navigate('/ambulances')}>Ambulances</Button>
                    <Button onClick={() => navigate('/doctors')}>Doctors</Button>
                </Header>
                <h3>Finding nearby Ambulances or Doctors?</h3>
                <span>Start the search by clicking either of the button on top right corner... :{')'}</span>
            </Container>
        </>
    )
}

export default Home;
