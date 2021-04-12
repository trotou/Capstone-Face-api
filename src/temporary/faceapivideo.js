import { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';
import FormDialog from '../components/ModalAddVideo';
import { Container, SelectFile, VideoContainer, ImageContainer, Button } from './faceVideoStyles';
// import ImageUp from './image';

const FaceApiVideo = () => {
    const [showVideoOrImage, setShowVideoOrImage] = useState(false);

    const videoHeight = 200;
    const videoWidth = 320;
    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef(); //SRC DO VIDEO
    const canvasRef = useRef();
    const [videoFilePath, setVideoPath] = useState(null);
    const [emotions, setEmotions] = useState({
        sad: [],
        angry: [],
        neutral: [],
        fearful: [],
        disgusted: [],
        happy: [],
        suprised: []
    });
    const [play, setPlay] = useState(true);

    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        setPlay(true);
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
                // await canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
                console.log(detections[0].expressions);
                // setEmotions(result);
            }
            if (leftVideo.ended) {
                clearInterval(interval);
                setPlay(false);
            }
        }, 200);
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
            <Button
                className="button-Change"
                onClick={() => setShowVideoOrImage(!showVideoOrImage)}
            >
                {showVideoOrImage ? 'Analyze Video' : 'Analyze Imagem'}
            </Button>

            {!showVideoOrImage && (
                <VideoContainer>
                    <span>{!initializing && play === true ? 'Analyzing' : ''}</span>
                    {play && (
                        <div>
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
                                <SelectFile type="file" onChange={handleVideoUpload} />
                            </form>
                        </div>
                    )}
                    {!play && (
                        <>
                            <FormDialog />
                            <Button onClick={() => window.location.reload()}>
                                Try other video
                            </Button>
                        </>
                    )}
                </VideoContainer>
            )}

            {showVideoOrImage && (
                <ImageContainer>
                    <img alt="" id="myImg" width="200px" height="200px" />
                    <SelectFile
                        id="myFileUpload"
                        type="file"
                        onChange={(e) => setUrl(e.target.value)}
                        accept=".jpg, .jpeg, .png"
                    />
                    <Button onClick={start}>Analyze</Button>
                </ImageContainer>
            )}

            <canvas ref={canvasRef} />
        </Container>
    );
};

export default FaceApiVideo;
