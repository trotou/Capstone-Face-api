import React from 'react';

// ---------------------------
const EmotionsContext = React.createContext();

// ------------------------------------
export const EmotionsProvider = ({ children }) => {
    const [emotionsVideo, setEmotionsVideo] = React.useState({});
    const [emotionsImage, setEmotionsImage] = React.useState({});

    return (
        <EmotionsContext.Provider
            value={{
                emotionsVideo,
                setEmotionsVideo,
                emotionsImage,
                setEmotionsImage
            }}
        >
            {children}
        </EmotionsContext.Provider>
    );
};

export const useEmotions = () => React.useContext(EmotionsContext);
