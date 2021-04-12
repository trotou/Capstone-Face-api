import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useServices } from '../../providers/Services';
import { CarouselDiv, CarouselWrapper } from './styles';
import img1 from '../../assets/Images/img1.jpg';
import img2 from '../../assets/Images/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import img4 from '../../assets/Images/img4.jpg';
import img5 from '../../assets/Images/img5.jpg';
import img6 from '../../assets/Images/img6.jpg';
import img7 from '../../assets/Images/img7.jpg';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const CarroselDemo = () => {
    const { getVideos, getImages, deleteVideos } = useServices();
    const [videoList, setVideoList] = useState([]);
    const [imageList, setImages] = useState([]);

    const images = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        },
        {
            img: img7
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            const videos = await getVideos();
            const images = await getImages();
            setVideoList(videos);
            setImages(images);
        };
        fetchData();
    }, []);

    console.log(videoList);

    return (
        <CarouselWrapper>
            <div style={{ width: '100%' }}>
                <h3 /* style={{ textAlign: 'left' }}*/>Videos</h3>
                <Carousel breakPoints={breakPoints}>
                    {videoList &&
                        videoList.map((item, i) => (
                            <CarouselDiv key={i}>
                                <button onClick={() => deleteVideos(item.id)}>Delete</button>
                            </CarouselDiv>
                        ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}>
                <h3>Images</h3>
                <Carousel breakPoints={breakPoints}>
                    {images.map((item, index) => (
                        <div key={index} style={{ width: '280px' }}>
                            <img
                                src={item.img}
                                alt={index}
                                width="100%"
                                height="100%"
                                overflow="hidden"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}></div>
        </CarouselWrapper>
    );
};

export default CarroselDemo;
