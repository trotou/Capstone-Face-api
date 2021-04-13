import React from 'react';

import { Background } from './styles';

import RegisterForm from '../../components/RegisterForm';

import { motion } from 'framer-motion';

const RegisterPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Background>
                <RegisterForm />
            </Background>
        </motion.div>
    );
};

export default RegisterPage;
