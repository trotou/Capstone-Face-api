import { useEffect, useState } from 'react';

import { Container } from './styles';

import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
import LineGraph from '../../components/LineGraph';
import Carrosel from '../../components/Carousel';

import { useUserAuth } from '../../providers/UserAuth';

const HomePage = () => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');
    const { auth } = useUserAuth();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')) || '');
    }, []);

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')) || '');
    }, [auth]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Container>
                <FaceApiVideo />
                <LineGraph />
                {token && <Carrosel />}
            </Container>
        </motion.div>
    );
};

export default HomePage;
