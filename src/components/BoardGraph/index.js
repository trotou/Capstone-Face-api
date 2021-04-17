import React from 'react';

import LineGraph from '../LineGraph';
import PieGraph from '../PieGraph';
import { useEmotions } from '../../providers/Emotions';

// -----------------------------------------
const BoardGraph = () => {
    const { emotionsVideo, emotionsImage } = useEmotions();

    return (
        <>
            {emotionsVideo.angry && <LineGraph emotionsVideo={emotionsVideo} />}
            {emotionsImage.angry && <PieGraph emotionsImage={emotionsImage} />}
        </>
    );
};

export default BoardGraph;
