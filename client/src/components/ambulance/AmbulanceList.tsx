import React, { useEffect, useState } from 'react'
import ListContainer from '../ListContainer';
import axios from 'axios';
import 'react-responsive-pagination/themes/classic.css';
import ResponsivePagination from 'react-responsive-pagination';
import AmbulanceItem from './AmbulanceItem';
import Container from '../Container';
import SkeletonLoader from '../SkeletonLoader';

export type Ambulance = {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

type AmbulanceListProps = {
    refetch?: boolean;
    setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
    isManaging?: boolean;
    handleEditItem?: (ambulance: Ambulance) => void;
}

const AmbulanceList: React.FC<AmbulanceListProps> = ({ refetch, setRefetch, isManaging = false, handleEditItem }) => {

    const [ambulances, setAmbulances] = useState<Ambulance[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        fetchAmbulances();
    }, [page]);

    useEffect(() => {
        if (refetch && setRefetch) {
            fetchAmbulances();
            setRefetch(false);
        }
    }, [refetch])

    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        setPage(page);
        setAmbulances([]);
    }

    const fetchAmbulances = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/ambulances?page=${page}`);
            setAmbulances(response.data.data);
            setTotalPages(response.data.totalPages);
            setTotalItems(response.data.total)
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch ambulances');
            setLoading(false);
        }
    };

    return (
        <>
            <ListContainer >
                {loading ? new Array(10).fill(1).map((_item, idx) => <SkeletonLoader key={idx} />) : null}
                {error ? error : null}
                {!loading && !error && ambulances.length === 0 ? 'No doctors available' : null}
                {ambulances.length > 0 ?
                    <>
                        {ambulances.map((ambulance: Ambulance) => (
                            <AmbulanceItem key={ambulance.id} ambulance={ambulance} isManaging={isManaging} handleEditItem={handleEditItem} setRefetch={setRefetch} />
                        ))}
                        <Container>
                            <span>Total Ambulances available: {totalItems}</span>
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

export default AmbulanceList;


