import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
import LineGraph from '../../components/LineGraph';
import Carrosel from '../../components/Carousel';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import { useUserAuth } from '../../providers/UserAuth';
import { Container } from './styles';

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
            <TopBar />
            <Container>
                <FaceApiVideo />
                <LineGraph />
                {token && <Carrosel />}
            </Container>
            <Footer />
        </motion.div>
    );
};

export default HomePage;
