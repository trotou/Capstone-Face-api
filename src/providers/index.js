// providers
import { ServicesProvider } from '../providers/Services';
const Providers = ({ children }) => {
    return <ServicesProvider>{children}</ServicesProvider>;
};

export default Providers;
