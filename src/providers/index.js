// providers
import { ServicesProvider } from '../providers/Services';
import { EmotionsProvider } from '../providers/Emotions';
import { AuthProvider } from '../providers/UserAuth';

// ------------------------------------------------------
const Providers = ({ children }) => {
    return (
        <ServicesProvider>
            <EmotionsProvider>
                <AuthProvider>{children}</AuthProvider>
            </EmotionsProvider>
        </ServicesProvider>
    );
};

export default Providers;
