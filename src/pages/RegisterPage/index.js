import React from 'react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div>Register</div>
        </motion.div>
    );
};

export default RegisterPage;
