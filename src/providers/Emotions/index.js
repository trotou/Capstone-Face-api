import React from 'react';

// ---------------------------
const EmotionsContext = React.createContext();

// ------------------------------------
export const EmotionsProvider = ({ children }) => {
    const [emotions, setEmotions] = React.useState({});
    return (
        <EmotionsContext.Provider value={{ emotions, setEmotions }}>
            {children}
        </EmotionsContext.Provider>
    );
};

export const useEmotions = () => React.useContext(EmotionsContext);
