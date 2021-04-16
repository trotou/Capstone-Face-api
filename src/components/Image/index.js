import React from 'react';
import * as faceapi from 'face-api.js';
import { useServices } from '../../providers/Services';
import { useEmotions } from '../../providers/Emotions';
import * as I from './styles';

// -------------------------------

// -------------------------------
const Image = () => {
    const { setEmotions } = useEmotions();
    const { setData64 } = useServices();

    const start = async () => {
        const newEmotions = {};
        const imgFile = document.getElementById('myFileUpload').files[0];
        const img = await faceapi.bufferToImage(imgFile);
        const myImg = document.getElementById('myImg');
        myImg.src = img.src;
        const detections = await faceapi
            .detectAllFaces(myImg)
            .withFaceLandmarks()
            .withFaceExpressions();

        if (detections[0] !== undefined) {
            for (const x in detections[0].expressions) {
                switch (x) {
                    case 'sad':
                    case 'angry':
                    case 'disgusted':
                    case 'fearful':
                    case 'happy':
                    case 'neutral':
                    case 'surprised':
                        newEmotions[x] = (detections[0].expressions[x] * 100).toFixed(2);
                        break;

                    default:
                        break;
                }
            }
        }

        setEmotions(newEmotions);
        setData64(img.src);
    };

    return (
        <I.ImageContainer>
            <img alt="" id="myImg" width="280px" height="280px" />
            <I.Button for="myFileUpload">Choose image</I.Button>
            <I.SelectFile
                id="myFileUpload"
                type="file"
                onChange={start}
                accept=".jpg, .jpeg, .png"
            />
        </I.ImageContainer>
    );
};

export default Image;
