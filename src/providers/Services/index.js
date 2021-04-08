// react
import React from 'react';

// services
import API from '../../services';
import { bearer } from '../../services';
// ---------------------------
const ServicesContext = React.createContext();

export const ServicesProvider = ({ children }) => {
    const [token, setToken] = React.useState('');

    const register = async (data) => {
        try {
            const response = await API.post('/register/', data);

            const token = response.data.accessToken;
            console.log(token);
            setToken(token);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (data) => {
        try {
            const response = await API.post('/login/', data);

            const token = response.data.accessToken;
            console.log(token);
            setToken(token);
        } catch (error) {
            console.log(error);
        }
    };

    const videoRegister = async (data) => {
        try {
            await API.post('/videos/', data, bearer(token));
        } catch (error) {
            console.log(error);
        }
    };

    const imageRegister = async (data) => {
        try {
            await API.post('/images/', data, bearer(token));
        } catch (error) {
            console.log(error);
        }
    };

    const getImages = async () => {
        try {
            const response = await API.get('/images/', bearer(token));

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getVideos = async () => {
        try {
            const response = await API.get('/videos/', bearer(token));

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ServicesContext.Provider
            value={{
                login,
                register,
                videoRegister,
                imageRegister,
                getImages,
                getVideos
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => React.useContext(ServicesContext);
