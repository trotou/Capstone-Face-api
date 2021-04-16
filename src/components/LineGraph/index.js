import { useEffect, useState } from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
import { Container } from './styles';

// -----------------------------------------
const LineGraph = ({ emotionsVideo }) => {
    const [treatedEmotionsData, setTreatedEmotionsData] = useState({
        angry: [],
        disgusted: [],
        fearful: [],
        happy: [],
        neutral: [],
        sad: [],
        surprised: []
    });

    useEffect(() => {
        console.log('Recebeu as emoções: ', emotionsVideo);
        let infoHolder = treatedEmotionsData;
        for (const emotionData in emotionsVideo) {
            emotionsVideo[emotionData].forEach((value, index) => {
                infoHolder[emotionData].push({ x: index, y: parseFloat(value) });
            });
        }
        setTreatedEmotionsData(infoHolder);
        // eslint-disable-next-line
    }, [emotionsVideo]);

    const data = [
        {
            id: 'angry',
            data: [...treatedEmotionsData.angry]
        },
        {
            id: 'disgusted',
            data: [...treatedEmotionsData.disgusted]
        },
        {
            id: 'fearful',
            data: [...treatedEmotionsData.fearful]
        },
        {
            id: 'happy',
            data: [...treatedEmotionsData.happy]
        },
        {
            id: 'neutral',
            data: [...treatedEmotionsData.neutral]
        },
        {
            id: 'sad',
            data: [...treatedEmotionsData.sad]
        },
        {
            id: 'surprised',
            data: [...treatedEmotionsData.surprised]
        }
    ];

    return (
        <Container>
            <div
                style={{
                    width: `${data[0].data.length * 25}px`,
                    height: '50vh',
                    overflow: 'hidden'
                }}
            >
                <ResponsiveAreaBump
                    data={data}
                    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
                    spacing={8}
                    colors={[
                        '#C60000',
                        '#7EBA00',
                        '#FFF448',
                        '#2780B9',
                        '#CCCCCC',
                        '#13365A',
                        '#FF00FF'
                    ]}
                    startLabel="id"
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -36
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                />
            </div>
        </Container>
    );
};

export default LineGraph;
