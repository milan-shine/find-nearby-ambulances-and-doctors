import React, { useEffect, useState } from 'react'
import ListContainer from '../ListContainer';
import axios from 'axios';
import 'react-responsive-pagination/themes/classic.css';
import ResponsivePagination from 'react-responsive-pagination';
import DoctorItem from './DoctorItem';
import Container from '../Container';
import SkeletonLoader from '../SkeletonLoader';

export type Doctor = {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

type DoctorListProps = {
    refetch?: boolean;
    setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
    isManaging?: boolean;
    handleEditItem?: (doctor: Doctor) => void;
}

const DoctorList: React.FC<DoctorListProps> = ({ refetch, setRefetch, isManaging = false, handleEditItem }) => {

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        fetchDoctors();
    }, [page]);

    useEffect(() => {
        if (refetch && setRefetch) {
            fetchDoctors();
            setRefetch(false);
        }
    }, [refetch])

    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        setPage(page);
        setDoctors([]);
    }

    const fetchDoctors = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/doctors?page=${page}`);
            setDoctors(response.data.data);
            setTotalPages(response.data.totalPages);
            setTotalItems(response.data.total)
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch doctors');
            setLoading(false);
        }
    };

    return (
        <>
            <ListContainer >
                {loading ? new Array(10).fill(1).map((_item, idx) => <SkeletonLoader key={idx} />) : null}
                {error ? error : null}
                {!loading && !error && doctors.length === 0 ? 'No doctors available' : null}
                {doctors.length > 0 ?
                    <>
                        {doctors.map((doctor: Doctor) => (
                            <DoctorItem key={doctor.id} doctor={doctor} isManaging={isManaging} handleEditItem={handleEditItem} setRefetch={setRefetch} />
                        ))}
                        <Container>
                            <span>Total Doctors available: {totalItems}</span>
                            <ResponsivePagination
                                current={page}
                                total={totalPages}
                                onPageChange={handlePageChange} />
                        </Container>
                    </> : null}
            </ListContainer>
        </>
    )
}

export default DoctorList;


