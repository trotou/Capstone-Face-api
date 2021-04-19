import { useEffect, useState } from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { Container } from './styles';

// ---------------------------------------------------
const dataModel = [
    {
        angry: 0,
        disgusted: 0,
        fearful: 0,
        happy: 0,
        neutral: 0,
        sad: 0,
        surprised: 0
    }
];
// -----------------------------------------
const LineGraph = ({ emotionsVideo }) => {
    const [graphData, setGraphData] = useState(dataModel);

    useEffect(() => {
        const newData = [];

        for (let i = 0; i < emotionsVideo.angry.length; i++) {
            newData.push({
                angry: emotionsVideo.angry[i],
                disgusted: emotionsVideo.disgusted[i],
                fearful: emotionsVideo.fearful[i],
                happy: emotionsVideo.happy[i],
                neutral: emotionsVideo.neutral[i],
                sad: emotionsVideo.sad[i],
                surprised: emotionsVideo.surprised[i]
            });
        }

        setGraphData(newData);

        // eslint-disable-next-line
    }, [emotionsVideo]);

    return (
        <Container>
            <div
                style={{
                    width: `${graphData.length * 25}px`,
                    height: '50vh',
                    overflow: 'hidden'
                }}
            >
                <ResponsiveStream
                    data={graphData}
                    keys={['angry', 'disgusted', 'fearful', 'happy', 'neutral', 'sad', 'surprised']}
                    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendOffset: 36
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendOffset: -40
                    }}
                    offsetType="silhouette"
                    colors={[
                        '#C60000',
                        '#7EBA00',
                        '#FFF448',
                        '#2780B9',
                        '#CCCCCC',
                        '#13365A',
                        '#FF00FF'
                    ]}
                    fillOpacity={0.85}
                    borderColor={{ theme: 'background' }}
                />
            </div>
        </Container>
    );
};

export default LineGraph;
