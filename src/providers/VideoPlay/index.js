import React from 'react';

// ---------------------------
const VideoPlayContext = React.createContext();

// ------------------------------------
export const VideoPlayProvider = ({ children }) => {
    const [videoPlay, setVideoPlay] = React.useState(true);

    React.useEffect(() => {
        console.log('USOU O VIDEOPLAY');
        console.log('ended', videoPlay);
    }, [videoPlay]);

    return (
        <VideoPlayContext.Provider value={{ videoPlay, setVideoPlay }}>
            {children}
        </VideoPlayContext.Provider>
    );
};

export const useVideoPlay = () => React.useContext(VideoPlayContext);
