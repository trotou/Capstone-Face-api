import { ResponsiveAreaBump } from '@nivo/bump';
import { useEmotions } from '../../providers/Emotions';
import { useEffect } from 'react';

const generateFakeData = () => {
    let answer = [];
    for (let i = 1; i <= 2; i++) {
        answer.push({ x: i, y: Math.floor(Math.random() * 99) });
    }

    return answer;
};

const LineGraph = () => {
    const { emotions } = useEmotions();

    useEffect(() => {
        console.log(emotions.angry);
    }, [emotions]);

    const data = [
        // X === POSIÇÃO HORIZONTAL (index dos dadosDaApi)
        // Y === POSIÇÃO VERTICAL (dados da Api no dito Index)
        {
            id: 'angry',
            data: [...generateFakeData()]
        },
        {
            id: 'disgusted',
            data: [...generateFakeData()]
        },
        {
            id: 'fearful',
            data: [...generateFakeData()]
        },
        {
            id: 'happy',
            data: [...generateFakeData()]
        },
        {
            id: 'neutral',
            data: [...generateFakeData()]
        },
        {
            id: 'sad',
            data: [...generateFakeData()]
        },
        {
            id: 'surprised',
            data: [...generateFakeData()]
        }
    ];

    return (
        <div
            style={{
                width: '300px',
                height: '400px',
                overflowX: 'scroll',
                overflowY: 'hidden'
            }}
        >
            <div
                style={{
                    width: '100vw',
                    height: '100%'
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
        </div>
    );
};

export default LineGraph;
