import { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';
import FormDialog from '../components/ModalAddVideo';
import { useEmotions } from '../providers/Emotions';
import { useVideoPlay } from '../providers/VideoPlay';
// import ImageUp from './image';

const FaceApiVideo = () => {
    const videoHeight = 200;
    const videoWidth = 320;
    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef(); //SRC DO VIDEO
    const canvasRef = useRef();
    const [videoFilePath, setVideoPath] = useState(null);
    const { emotions, setEmotions } = useEmotions();
    const { videoPlay, setVideoPlay } = useVideoPlay();
    console.log(videoPlay);

    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');

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
        const newEmotions = {
            angry: [0],
            disgusted: [0],
            fearful: [0],
            happy: [0],
            neutral: [0],
            sad: [0],
            surprised: [0]
        };
        console.log('UNO', emotions.angry.length, newEmotions.angry.length);
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
                            newEmotions[x].push(detections[0].expressions[x]);
                            break;

                        default:
                            break;
                    }
                }
                // await canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
            }
            if (videoPlay && leftVideo.ended) {
                setVideoPlay(false);
                setTimeout(() => {
                    console.log(emotions.angry.length);
                    console.log('EMOTIONS: ', emotions);
                    console.log('NEWEMOTIONS: ', newEmotions);
                    if (!videoPlay) {
                        console.log('entrou');
                        setEmotions(newEmotions);
                        console.log('setouEmotions', newEmotions);
                    }
                    clearInterval(interval);
                }, 5000);
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
        <div>
            <span>{!initializing && videoPlay === true ? 'Analyzing' : ''}</span>
            {videoPlay && (
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
                        <input type="file" onChange={handleVideoUpload} />
                    </form>
                </div>
            )}
            {!videoPlay && (
                <>
                    <FormDialog />
                    <button onClick={() => window.location.reload()}>Try other video</button>
                </>
            )}

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img alt="" id="myImg" width="200px" height="200px" />
                <input
                    id="myFileUpload"
                    type="file"
                    onChange={(e) => setUrl(e.target.value)}
                    accept=".jpg, .jpeg, .png"
                />
                <button onClick={start}>go</button>
            </div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default FaceApiVideo;
