import React from 'react';
import * as faceapi from 'face-api.js';
import { useServices } from '../../providers/Services';
import { ImageContainer, SelectFile } from './styles';
// -------------------------------
const Image = () => {
    const { setData64 } = useServices();

    const start = async () => {
        const imgFile = document.getElementById('myFileUpload').files[0];
        const img = await faceapi.bufferToImage(imgFile);
        const myImg = document.getElementById('myImg');
        myImg.src = img.src;
        setData64(img.src);
    };

    return (
        <ImageContainer>
            <img alt="" id="myImg" width="280px" height="280px" />
            <SelectFile id="myFileUpload" type="file" onChange={start} accept=".jpg, .jpeg, .png" />
        </ImageContainer>
    );
};

export default Image;
