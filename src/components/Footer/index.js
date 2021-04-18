import { Container, YellowCircle } from './styles';

const Footer = () => {
    return (
        <Container>
            <div style={{ width: '50%', marginBottom: '5%' }}>
                <h2>Faster, better insights</h2>
                <p>
                    Consumer behavior research with biosensors saves you time and money by recording
                    consumer reactions instantly, so your product questions are backed by
                    substantial neuromarketing data.
                </p>
            </div>

            <div className="container-list">
                <div className="container-description">
                    <YellowCircle></YellowCircle>
                    <div className="container-description__in">
                        <h3>Product Development</h3>
                        <p>
                            Consumer behavior research with biosensors saves you time and money by
                            recording consumer reactions instantly.
                        </p>
                    </div>
                </div>

                <div className="container-description">
                    <YellowCircle></YellowCircle>
                    <div className="container-description__in">
                        <h3>User &amp; Audience Testing</h3>
                        <p>
                            Which interface features in website, gaming, ot media draw or detract
                            from emotional engagement or attention?
                        </p>
                    </div>
                </div>

                <div className="container-description">
                    <YellowCircle></YellowCircle>
                    <div className="container-description__in">
                        <h3>Sensory Testing</h3>
                        <p>How do consumers react to fragrances or flavors?</p>
                    </div>
                </div>

                <div className="container-description">
                    <YellowCircle></YellowCircle>
                    <div className="container-description__in">
                        <h3>Competitor Research</h3>
                        <p>
                            How do consumers rekate emotionally to my products versus the
                            competition?
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
