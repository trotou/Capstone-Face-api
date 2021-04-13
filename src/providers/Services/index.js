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

    const registerForm = async (data) => {
        try {
            const response = await API.post('/register/', data);

            const token = response.data.accessToken;
            localStorage.setItem('token', JSON.stringify(token));
            setToken(token);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (data) => {
        try {
            const response = await API.post('/login/', data);

            const token = response.data.accessToken;
            localStorage.setItem('token', JSON.stringify(token));
            setToken(token);
        } catch (error) {
            console.log(error);
        }
    };

    const userId = () => jwt_decode(token);

    const getUser = async () => {
        try {
            const response = await API.get(`/users/${userId()}`, bearer(token));
            return response.data;
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

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getUserImages = async (userId) => {
        try {
            const response = await API.get(`/images/?userId=${userId}`, bearer(token));

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getVideos = async () => {
        try {
            const response = await API.get('/videos/', bearer(token));

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getUserVideos = async (userId) => {
        try {
            const response = await API.get(`/videos/?userId=${userId}`, bearer(token));

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteVideos = async (id) => {
        try {
            await API.delete(`/videos/${id}`, bearer(token));

            return 'Deleted';
        } catch (error) {
            console.log(error);
        }
    };

    const deleteImages = async (id) => {
        try {
            await API.delete(`/images/${id}`, bearer(token));

            return 'Deleted';
        } catch (error) {
            console.log(error);
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
                deleteImages
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => React.useContext(ServicesContext);
