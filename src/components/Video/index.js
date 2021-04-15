import React from 'react';
import * as faceapi from 'face-api.js';
import VideoThumbnail from 'react-video-thumbnail';
import { useEmotions } from '../../providers/Emotions';
import { useServices } from '../../providers/Services';
import { VideoContainer } from './styles';

// -------------------------------------
const videoHeight = 200;
const videoWidth = 320;
const newEmotions = {
    angry: [0],
    disgusted: [0],
    fearful: [0],
    happy: [0],
    neutral: [0],
    sad: [0],
    surprised: [0]
};
// -------------------------------------
const Video = ({ setInitializing, setVideoPlay }) => {
    const videoRef = React.useRef(); //SRC DO VIDEO
    const [videoFilePath, setVideoPath] = React.useState(null);
    const { setEmotions } = useEmotions();
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
                setEmotions(newEmotions);
                clearInterval(interval);
            }
        }, 100);
    };

    return (
        <>
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
            <div style={{ display: 'hidden' }}>
                <VideoThumbnail
                    renderThumbnail={false}
                    videoUrl={videoFilePath}
                    thumbnailHandler={(thumbnail) => setData64(thumbnail)}
                />
            </div>
        </>
    );
};

export default Video;
