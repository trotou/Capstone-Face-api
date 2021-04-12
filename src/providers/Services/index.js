// react
import React from 'react';

// services
import API from '../../services';
import { bearer } from '../../services';
// ---------------------------
const ServicesContext = React.createContext();

export const ServicesProvider = ({ children }) => {
    const [token, setToken] = React.useState('');

    const registerForm = async (data) => {
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
            const response = await API.get(
                '/images/',
                bearer(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhAbWFpbC5jb20iLCJpYXQiOjE2MTgxODMwNzEsImV4cCI6MTYxODE4NjY3MSwic3ViIjoiMSJ9.upmqy9OY9NW8GxVnjxTXbWGUWqLixxmTpkHHd89Pm9A'
                )
            );

            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getVideos = async () => {
        try {
            const response = await API.get(
                '/videos/?userId=1',
                bearer(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhAbWFpbC5jb20iLCJpYXQiOjE2MTgxODMwNzEsImV4cCI6MTYxODE4NjY3MSwic3ViIjoiMSJ9.upmqy9OY9NW8GxVnjxTXbWGUWqLixxmTpkHHd89Pm9A'
                )
            );

            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteVideos = async (id) => {
        try {
            await API.delete(
                `/videos/${id}`,
                bearer(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhAbWFpbC5jb20iLCJpYXQiOjE2MTgxODYxNTQsImV4cCI6MTYxODE4OTc1NCwic3ViIjoiMSJ9.k7PyreElONibE_vWWwnilAyfbYKNoWbpRmTN_UAA5JE'
                )
            );

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
                videoRegister,
                imageRegister,
                getImages,
                getVideos,
                deleteVideos,
                deleteImages
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => React.useContext(ServicesContext);
