import { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';
import FormDialog from '../components/ModalAddVideo';
import { Container, SelectFile, VideoContainer, ImageContainer, Button } from './faceVideoStyles';
import { useEmotions } from '../providers/Emotions';
import { useServices } from '../providers/Services/index';
import { useVideoPlay } from '../providers/VideoPlay';
import FormDialogImg from '../components/ModalAddImg';

import { DefaultButtonAnimation, ChangeVideoAndImage } from '../components/AnimationComponents/';
// import ImageUp from './image';

const FaceApiVideo = () => {
    const [showVideoOrImage, setShowVideoOrImage] = useState(false);

    const videoHeight = 200;
    const videoWidth = 320;
    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef(); //SRC DO VIDEO
    const canvasRef = useRef();
    const [videoFilePath, setVideoPath] = useState(null);
    const { emotions, setEmotions } = useEmotions();
    // const { videoPlay, setVideoPlay } = useVideoPlay();
    const [videoPlay, setVideoPlay] = useState(true);

    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');
    const newEmotions = {
        angry: [0],
        disgusted: [0],
        fearful: [0],
        happy: [0],
        neutral: [0],
        sad: [0],
        surprised: [0]
    };

    // const newEmotions = {
    //     ...emotions
    // };

    const handleSubmit = (event) => {
        setVideoPlay(true);
        event.preventDefault();
        setUrl(inputValue);
    };

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            setInitializing(true);
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
            ]);
        };

        loadModels();
    }, []);

    useEffect(() => {
        // console.log('Video Play: ', videoPlay);
        // console.log('Emotions', newEmotions);

        if (!videoPlay) {
            // console.log('entrou');
            // console.log('setouEmotions', newEmotions);
            // setEmotions(newEmotions);
        }
    }, [videoPlay]);

    const handleVideoUpload = (event) => {
        setVideoPath(URL.createObjectURL(event.target.files[0]));
    };

    const leftVideo = document.getElementById('player');

    const startVideo = () => {
        if (leftVideo.ended !== true) {
            leftVideo.onplay = function () {
                const stream = leftVideo.captureStream();
                videoRef.current.srcObject = stream;
            };
        }
    };

    const handleVideoOnPlay = () => {
        // console.log('UNO', emotions.angry.length, newEmotions.angry.length);
        startVideo();
        const interval = setInterval(async () => {
            //A CADA INTERVALO, CALCULA OS DADOS DA API
            if (initializing) {
                setInitializing(false);
            }
            // canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            // const displaySize = { width: videoWidth, height: videoHeight };
            // faceapi.matchDimensions(canvasRef.current, displaySize);

            const detections = await faceapi
                .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceExpressions();
            if (detections[0] !== undefined && leftVideo.ended !== true) {
                for (const x in detections[0].expressions) {
                    switch (x) {
                        case 'sad':
                        case 'angry':
                        case 'disgusted':
                        case 'fearful':
                        case 'happy':
                        case 'neutral':
                        case 'surprised':
                            newEmotions[x].push((detections[0].expressions[x] * 100).toFixed(2));
                            break;

                        default:
                            break;
                    }
                }
                // await canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
            }
            if (videoPlay && leftVideo.ended) {
                setVideoPlay(false);
                // console.log('EMOTIONS: ', emotions);
                // console.log('NEWEMOTIONS: ', newEmotions);
                setEmotions(newEmotions);
                // if (!videoPlay) {
                //     console.log('entrou');
                //     setEmotions(newEmotions);
                //     console.log('setouEmotions', newEmotions);
                // }
                clearInterval(interval);
            }
        }, 100);
    };

    const start = async () => {
        // setUrl(value);
        const imgFile = document.getElementById('myFileUpload').files[0];
        const img = await faceapi.bufferToImage(imgFile);
        const myImg = document.getElementById('myImg');
        myImg.src = img.src;
        const detections = await faceapi
            .detectAllFaces(myImg)
            .withFaceLandmarks()
            .withFaceExpressions();
        console.log(detections[0].expressions);
    };

    return (
        <Container>
            <div className="div-button">
                <DefaultButtonAnimation>
                    <Button
                        className="button-Change"
                        onClick={() => setShowVideoOrImage(!showVideoOrImage)}
                    >
                        {showVideoOrImage ? 'Analyze Video' : 'Analyze Imagem'}
                    </Button>
                </DefaultButtonAnimation>
            </div>

            {!showVideoOrImage && (
                <ChangeVideoAndImage>
                    <div>
                        <span>{!initializing && videoPlay ? 'Analyzing' : ''}</span>
                        {videoPlay && (
                            <VideoContainer>
                                <video
                                    poster="images/videologo.png"
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    src={videoFilePath}
                                    height={videoHeight}
                                    width={videoWidth}
                                    onPlay={handleVideoOnPlay}
                                    id="player"
                                />
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type="file" onChange={handleVideoUpload} />
                                </form>
                            </VideoContainer>
                        )}
                        {!videoPlay && (
                            <>
                                <FormDialog />
                                <button onClick={() => window.location.reload()}>
                                    Try other video
                                </button>
                            </>
                        )}
                    </div>
                </ChangeVideoAndImage>
            )}
            {showVideoOrImage && (
                <ChangeVideoAndImage>
                    <ImageContainer>
                        <img alt="" id="myImg" width="280px" height="280px" />
                        <SelectFile
                            id="myFileUpload"
                            type="file"
                            onChange={(e) => setUrl(e.target.value)}
                            accept=".jpg, .jpeg, .png"
                        />
                        <Button onClick={start}>Analyze</Button>
                        <FormDialogImg />
                    </ImageContainer>
                </ChangeVideoAndImage>
            )}
            <canvas ref={canvasRef} />
        </Container>
    );
};

export default FaceApiVideo;
