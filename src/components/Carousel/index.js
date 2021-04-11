import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { CarouselDiv } from './styles';
import { CarouselWrapper } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Carrosel = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <CarouselWrapper>
            <div style={{ width: '100%' }}>
                <h3 style={{ textAlign: 'left' }}>Videos</h3>
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <CarouselDiv key={item}>{item}</CarouselDiv>
                    ))}
                </Carousel>
            </div>
            <div style={{ width: '100%' }}></div>
        </CarouselWrapper>
    );
};

export default Carrosel;
