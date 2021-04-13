// providers
import { ServicesProvider } from '../providers/Services';
import { EmotionsProvider } from '../providers/Emotions';
import { AuthProvider } from '../providers/UserAuth';
import { VideoPlayProvider } from '../providers/VideoPlay';

// ------------------------------------------------------
const Providers = ({ children }) => {
    return (
        <ServicesProvider>
            <VideoPlayProvider>
                <EmotionsProvider>
                    <AuthProvider>{children}</AuthProvider>
                </EmotionsProvider>
            </VideoPlayProvider>
        </ServicesProvider>
    );
};

export default Providers;
