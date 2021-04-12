import React from 'react';

// ---------------------------
const EmotionsContext = React.createContext();

// ------------------------------------
export const EmotionsProvider = ({ children }) => {
    const [emotions, setEmotions] = React.useState({
        angry: [0],
        disgusted: [0],
        fearful: [0],
        happy: [0],
        neutral: [0],
        sad: [0],
        surprised: [0]
    });

    React.useEffect(() => {
        console.log('USOU O EMOTIONS');
    }, [emotions]);

    return (
        <EmotionsContext.Provider value={{ emotions, setEmotions }}>
            {children}
        </EmotionsContext.Provider>
    );
};

export const useEmotions = () => React.useContext(EmotionsContext);
