import { useState, useRef } from 'react';
import FormDialog from '../ModalAddVideo';
import FormDialogImg from '../ModalAddImg';
import { useServices } from '../../providers/Services';
import Video from '../Video';
import Image from '../Image';
import { DefaultButtonAnimation, ChangeVideoAndImage } from '../AnimationComponents';
import { Container, Button } from './faceVideoStyles';

// -------------------------------------------------
const FaceApiVideo = () => {
    const [showVideoOrImage, setShowVideoOrImage] = useState(false);
    const [initializing, setInitializing] = useState(false);
    const [videoPlay, setVideoPlay] = useState(true);
    const { auth } = useServices();
    const canvasRef = useRef();

    return (
        <Container>
            <div className="div-button">
                {!initializing ? (
                    <DefaultButtonAnimation>
                        <Button
                            className="button-Change"
                            onClick={() => setShowVideoOrImage(!showVideoOrImage)}
                        >
                            {showVideoOrImage ? 'Analyze Video' : 'Analyze Imagem'}
                        </Button>
                    </DefaultButtonAnimation>
                ) : (
                    <span>Analyzing ... </span>
                )}
            </div>

            {!showVideoOrImage ? (
                <ChangeVideoAndImage>
                    <div>
                        {videoPlay ? (
                            <Video setInitializing={setInitializing} setVideoPlay={setVideoPlay} />
                        ) : (
                            <>
                                {auth && <FormDialog />}
                                <button onClick={() => setVideoPlay(true)}>Try other video</button>
                            </>
                        )}
                    </div>
                </ChangeVideoAndImage>
            ) : (
                <>
                    <ChangeVideoAndImage>
                        <Image />
                        {auth && <FormDialogImg />}
                    </ChangeVideoAndImage>
                </>
            )}
            <canvas ref={canvasRef} />
        </Container>
    );
};

export default FaceApiVideo;
