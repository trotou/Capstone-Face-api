import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useServices } from '../../providers/Services';
import { CarouselDiv, CarouselWrapper } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

// --------------------------------------
const Carrosel = () => {
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

    return (
        <CarouselWrapper>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Videos</h2>
                <Carousel breakPoints={breakPoints}>
                    {videosList[0] &&
                        videosList.map((item, i) => (
                            <CarouselDiv key={i}>
                                title: {item.title}
                                <br></br>
                                date: {item.date}
                                <button onClick={() => handleDeleteVid(item.id)}>Delete</button>
                                <img alt="" src={item.base} width="200px" height="200px" />
                            </CarouselDiv>
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Images</h2>
                <Carousel breakPoints={breakPoints}>
                    {imagesList[0] &&
                        imagesList.map((item, i) => (
                            <CarouselDiv key={i}>
                                title: {item.title}
                                <br /> date: {item.date}
                                <button onClick={() => handleDeleteImg(item.id)}>Delete</button>
                                <img alt="" src={item.base} width="200px" height="200px" />
                            </CarouselDiv>
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}></div>
        </CarouselWrapper>
    );
};

export default Carrosel;
