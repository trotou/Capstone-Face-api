import { ExampleWrapper, YellowCircle, Typography } from './styles.js';

const ExampleFooter = ({ drawing, title, text }) => {
    return (
        <ExampleWrapper>
            <YellowCircle>{drawing}</YellowCircle>
            <Typography>
                <h4 style={{ width: '100%', marginBottom: '5px' }}>{title}</h4>
                <span style={{ width: '100%' }}>{text}</span>
            </Typography>
        </ExampleWrapper>
    );
};

export default ExampleFooter;
