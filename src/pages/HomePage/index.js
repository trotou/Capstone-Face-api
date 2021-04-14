import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
// import LineGraph from '../../components/LineGraph';
import Carrosel from '../../components/Carousel';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import { useServices } from '../../providers/Services';
import { Container } from './styles';

const HomePage = () => {
    const { auth } = useServices();

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
                {/* <LineGraph /> */}
                {auth && <Carrosel />}
            </Container>
            <Footer />
        </motion.div>
    );
};

export default HomePage;
