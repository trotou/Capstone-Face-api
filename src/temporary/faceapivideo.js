import { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';
import FormDialog from '../components/ModalAddVideo';

const FaceApiVideo = () => {
    const videoHeight = 400;
    const videoWidth = 640;
    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef(); //SRC DO VIDEO
    const canvasRef = useRef();
    const [videoFilePath, setVideoPath] = useState(null);

    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
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
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
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
        setInterval(async () => {
            //A CADA INTERVALO, CALCULA OS DADOS DA API
            if (initializing) {
                setInitializing(false);
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = { width: videoWidth, height: videoHeight };
            faceapi.matchDimensions(canvasRef.current, displaySize);

            const detections = await faceapi //DETECTIONS É OS DADOS DA API
                .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceExpressions();
            await canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
            if (detections[0] !== undefined && leftVideo.ended !== true) {
                console.log(detections[0].expressions);
            }
        }, 200); //INTERVALO DETERMINADO
    };

    return (
        <div>
            <span>{initializing ? 'Waiting input' : 'Analyzing'}</span>
            <video
                ref={videoRef}
                autoPlay
                muted
                src={videoFilePath}
                height={videoHeight}
                width={videoWidth}
                onPlay={handleVideoOnPlay}
                id="player"
            />

            <div>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="file" onChange={handleVideoUpload} />
                    </form>
                </div>
                <FormDialog />
            </div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default FaceApiVideo;
