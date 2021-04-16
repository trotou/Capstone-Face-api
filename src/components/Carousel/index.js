import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useServices } from '../../providers/Services';
import { CarouselWrapper } from './styles';
import ThumbCarousel from '../ThumbCarousel';
import { useEmotions } from '../../providers/Emotions';
import './style.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

// --------------------------------------
const Carrosel = () => {
    const { setEmotions } = useEmotions();
    const {
        getUserVideos,
        getUserImages,
        getUser,
        deleteVideos,
        deleteImages,
        videosList,
        imagesList,
        auth
    } = useServices();
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (auth) {
            const user = await getUser();
            console.log(user);
            setUser(user);

            await getUserVideos(user.id);

            await getUserImages(user.id);
        }
    };

    const handleDeleteVid = async (id) => {
        await deleteVideos(id);
        await getUserVideos(user.id);
    };

    const handleDeleteImg = async (id) => {
        await deleteImages(id);
        await getUserImages(user.id);
    };

    const handleLoadVid = (emotions) => {
        setEmotions(emotions);
    };

    const handleLoadImg = (emotions) => {
        setEmotions(emotions);
    };

    return (
        <CarouselWrapper>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Videos</h2>
                <Carousel breakPoints={breakPoints}>
                    {videosList[0] &&
                        videosList.map((item, i) => (
                            <ThumbCarousel
                                key={i}
                                title={item.title}
                                date={item.date}
                                handleDelete={handleDeleteVid}
                                handleLoad={handleLoadVid}
                                emotions={item.emotions}
                                id={item.id}
                                base={item.base}
                            />
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Images</h2>
                <Carousel breakPoints={breakPoints}>
                    {imagesList[0] &&
                        imagesList.map((item, i) => (
                            <ThumbCarousel
                                key={i}
                                title={item.title}
                                date={item.date}
                                handleDelete={handleDeleteImg}
                                handleLoad={handleLoadImg}
                                emotions={item.emotions}
                                id={item.id}
                                base={item.base}
                            />
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}></div>
        </CarouselWrapper>
    );
};

export default Carrosel;
