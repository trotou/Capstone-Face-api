import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { useServices } from '../../providers/Services';
import { CarouselDiv, CarouselWrapper } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Carrosel = () => {
    const {
        getUserVideos,
        getUserImages,
        getUser,
        deleteVideos,
        deleteImages,
        userId,
        changes,
        setChanges
    } = useServices();
    const [videoList, setVideoList] = useState([]);
    const [imageList, setImages] = useState([]);

    useEffect(() => {
        fetchData();
    }, [changes]);

    const fetchData = async () => {
        const user = await getUser();
        console.log(user);
        const videos = await getUserVideos(userId());

        console.log(videos);
        const images = await getUserImages(userId());
        console.log(images);
        setVideoList(videos);
        setImages(images);
    };

    const handleDeleteVid = (id) => {
        deleteVideos(id);
        setChanges(!changes);
    };

    const handleDeleteImg = (id) => {
        deleteImages(id);
        setChanges(!changes);
    };

    return (
        <CarouselWrapper>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Videos</h2>
                <Carousel breakPoints={breakPoints}>
                    {videoList &&
                        videoList.map((item, i) => (
                            <CarouselDiv key={i}>
                                title: {item.title}
                                <br></br>
                                date: {item.date}
                                <button onClick={() => handleDeleteVid(item.id)}>Delete</button>
                            </CarouselDiv>
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#fff' }}>Images</h2>
                <Carousel breakPoints={breakPoints}>
                    {imageList &&
                        imageList.map((item, i) => (
                            <CarouselDiv key={i}>
                                title: {item.title}
                                <br /> date: {item.date}
                                <button onClick={() => handleDeleteImg(item.id)}>Delete</button>
                            </CarouselDiv>
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}></div>
        </CarouselWrapper>
    );
};

export default Carrosel;
