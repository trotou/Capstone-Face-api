import React from 'react';

import { Background } from './styles';

import LoginForm from '../../components/LoginForm';

import { motion } from 'framer-motion';

const LoginPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Background>
                <LoginForm />
            </Background>
        </motion.div>
    );
};

export default LoginPage;
