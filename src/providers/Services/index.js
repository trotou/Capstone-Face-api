// react
import React from 'react';

// jwt decode
import jwt_decode from 'jwt-decode';

// services
import API from '../../services';
import { bearer } from '../../services';
// ---------------------------
const ServicesContext = React.createContext();

export const ServicesProvider = ({ children }) => {
    const [token, setToken] = React.useState(() => JSON.parse(localStorage.getItem('token')) || '');
    const [auth, setAuth] = React.useState(false);
    const [changes, setChanges] = React.useState(false);
    const [data64, setData64] = React.useState('');

    React.useEffect(() => {
        if (token) setAuth(true);
        // eslint-disable-next-line
    }, []);

    const registerForm = async (data) => {
        try {
            const response = await API.post('/register/', data);

            const token = response.data.accessToken;
            localStorage.setItem('token', JSON.stringify(token));
            setToken(token);
        } catch (error) {
            console.log('Não registrou: ', error);
        }
    };

    const login = async (data) => {
        try {
            const response = await API.post('/login/', data);

            const token = response.data.accessToken;
            localStorage.setItem('token', JSON.stringify(token));
            setToken(token);

            setAuth(true);
        } catch (error) {
            console.log('Não logou: ', error);
        }
    };

    const logout = () => {
        localStorage.clear();
        setToken('');
        setAuth(false);
    };

    const userId = () => jwt_decode(token).sub;

    const getUser = async () => {
        try {
            const response = await API.get(`/users/${userId()}`, bearer(token));
            return response.data;
        } catch (error) {
            console.log('Não trouxe usuário: ', error);

            logout();
        }
    };

    const videoRegister = async (data) => {
        try {
            await API.post('/videos/', data, bearer(token));
        } catch (error) {
            console.log('Não registrou vídeo: ', error);
        }
    };

    const imageRegister = async (data) => {
        try {
            await API.post('/images/', data, bearer(token));
        } catch (error) {
            console.log('Não registrou imagem: ', error);
        }
    };

    const getImages = async () => {
        try {
            const response = await API.get('/images/', bearer(token));

            return response.data;
        } catch (error) {
            console.log('Não trouxe imagens: ', error);
        }
    };

    const getUserImages = async (userId) => {
        try {
            const response = await API.get(`/images/?userId=${userId}`, bearer(token));

            return response.data;
        } catch (error) {
            console.log('Não trouxe imagens: ', error);
        }
    };

    const getVideos = async () => {
        try {
            const response = await API.get('/videos/', bearer(token));

            return response.data;
        } catch (error) {
            console.log('Não trouxe vídeos: ', error);
        }
    };

    const getUserVideos = async (userId) => {
        try {
            const response = await API.get(`/videos/?userId=${userId}`, bearer(token));

            return response.data;
        } catch (error) {
            console.log('Não trouxe vídeos: ', error);
        }
    };

    const deleteVideos = async (id) => {
        try {
            await API.delete(`/videos/${id}`, bearer(token));

            return 'Deleted';
        } catch (error) {
            console.log('Não deletou os vídeos: ', error);
        }
    };

    const deleteImages = async (id) => {
        try {
            await API.delete(`/images/${id}`, bearer(token));

            return 'Deleted';
        } catch (error) {
            console.log('Não deletou imagem: ', error);
        }
    };

    return (
        <ServicesContext.Provider
            value={{
                login,
                registerForm,
                userId,
                videoRegister,
                imageRegister,
                getImages,
                getUser,
                getUserImages,
                getVideos,
                getUserVideos,
                deleteVideos,
                deleteImages,
                auth,
                logout,
                changes,
                setChanges,
                data64,
                setData64
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => React.useContext(ServicesContext);
