import React from 'react';
import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
import Carrosel from '../../components/Carousel';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80vw',
                    height: '100vh',
                    alignContent: 'center',
                    padding: '5%'
                }}
            >
                <FaceApiVideo />                
                <Carrosel />
            </div>
        </motion.div>
    );
};

export default HomePage;
