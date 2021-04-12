import React from 'react';

import { Container } from './styles';

import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
import LineGraph from '../../components/LineGraph';
// import FaceApiVideo from '../../temporary/faceapivideo';
import CarroselDemo from '../../components/CarouselDemo';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Container>
                <FaceApiVideo />
                <CarroselDemo />
            </Container>
            <LineGraph />
        </motion.div>
    );
};

export default HomePage;
