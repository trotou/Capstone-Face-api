// providers
import { ServicesProvider } from '../providers/Services';
import { EmotionsProvider } from '../providers/Emotions';
import { VideoPlayProvider } from '../providers/VideoPlay';

// ------------------------------------------------------
const Providers = ({ children }) => {
    return (
        <ServicesProvider>
            <VideoPlayProvider>
                <EmotionsProvider>{children}</EmotionsProvider>
            </VideoPlayProvider>
        </ServicesProvider>
    );
};

export default Providers;
