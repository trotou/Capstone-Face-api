import React from 'react';
import * as faceapi from 'face-api.js';
import VideoThumbnail from 'react-video-thumbnail';
import { useEmotions } from '../../providers/Emotions';
import { useServices } from '../../providers/Services';
import * as V from './styles';

// -------------------------------------
const videoHeight = 200;
const videoWidth = 320;
// -------------------------------------
const Video = ({ initializing, setInitializing, setVideoPlay }) => {
    const videoRef = React.useRef(); //SRC DO VIDEO
    const [videoFilePath, setVideoPath] = React.useState(null);
    const { setEmotionsVideo, setEmotionsImage } = useEmotions();
    const { setData64 } = useServices();

    React.useEffect(() => {
        loadModels();
    }, []);

    const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models';
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
        ]);
    };

    const handleSubmit = (event) => {
        setVideoPlay(true);
        event.preventDefault();
    };

    const handleVideoUpload = (event) => {
        setEmotionsImage({});
        setEmotionsVideo({});
        setVideoPath(URL.createObjectURL(event.target.files[0]));
    };

    const startVideo = (leftVideo) => {
        if (!leftVideo.ended) {
            setInitializing(true);
            leftVideo.onplay = () => {
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

        const leftVideo = document.getElementById('player');
        startVideo(leftVideo);
        //A CADA INTERVALO, CALCULA OS DADOS DA API
        const interval = setInterval(async () => {
            const detections = await faceapi
                .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceExpressions();

            if (detections[0] !== undefined && !leftVideo.ended) {
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
            }

            if (leftVideo.ended) {
                setVideoPlay(false);
                setInitializing(false);
                setEmotionsVideo(newEmotions);
                clearInterval(interval);
            }
        }, 100);
    };

    return (
        <>
            <V.VideoContainer>
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
                <div style={{ display: 'none' }}>
                    <VideoThumbnail
                        renderThumbnail={false}
                        videoUrl={videoFilePath}
                        thumbnailHandler={(thumbnail) => setData64(thumbnail)}
                    />
                </div>
                {!initializing && (
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <V.Button for="video-upload">Choose video</V.Button>
                        <input
                            id="video-upload"
                            style={{ display: 'none' }}
                            type="file"
                            onChange={handleVideoUpload}
                        />
                    </form>
                )}
            </V.VideoContainer>
        </>
    );
};

export default Video;
