import { motion } from 'framer-motion';

export const DefaultButtonAnimation = ({ children }) => (
    <motion.div whileHover={{ scale: 1.1 }}>{children}</motion.div>
);

export const ChangeVideoAndImage = ({ children }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
    </motion.div>
);
