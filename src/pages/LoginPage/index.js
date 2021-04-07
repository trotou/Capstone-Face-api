import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div>Login</div>
        </motion.div>
    );
};

export default LoginPage;
