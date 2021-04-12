// providers
import { ServicesProvider } from '../providers/Services';
import { EmotionsProvider } from '../providers/Emotions';
// ------------------------------------------------------
const Providers = ({ children }) => {
    return (
        <ServicesProvider>
            <EmotionsProvider>{children}</EmotionsProvider>
        </ServicesProvider>
    );
};

export default Providers;
