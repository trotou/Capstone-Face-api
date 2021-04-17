import { useEffect, useState } from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
import { Container } from './styles';

// ---------------------------------------------------
const dataModel = [
    {
        id: 'angry',
        data: []
    },
    {
        id: 'disgusted',
        data: []
    },
    {
        id: 'fearful',
        data: []
    },
    {
        id: 'happy',
        data: []
    },
    {
        id: 'neutral',
        data: []
    },
    {
        id: 'sad',
        data: []
    },
    {
        id: 'surprised',
        data: []
    }
];
// -----------------------------------------
const LineGraph = ({ emotionsVideo }) => {
    const [graphData, setGraphData] = useState(dataModel);

    useEffect(() => {
        const newData = [];
        for (const emotion in emotionsVideo) {
            const newEmotion = {};
            newEmotion.id = emotion;

            newEmotion.data = emotionsVideo[emotion].map((value, index) => ({
                x: index,
                y: parseFloat(value)
            }));

            newData.push(newEmotion);
        }
        setGraphData(newData);

        // eslint-disable-next-line
    }, [emotionsVideo]);

    return (
        <Container>
            <div
                style={{
                    width: `${graphData[0].data.length * 25}px`,
                    height: '50vh',
                    overflow: 'hidden'
                }}
            >
                <ResponsiveAreaBump
                    data={graphData}
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
