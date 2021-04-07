import axios from 'axios';
import Cookies from 'js-cookie';

export const baseUrl = 'https://addpi.cloudareus.com:8080/';

const instance = axios.create({
    baseURL: 'https://addpi.cloudareus.com:8080/'
});


instance.interceptors.request.use(function (config) {
    const token = Cookies.get('token') || '';

    if (token) {
        config.headers.common['Authorization'] = `bearer ${token}`;
    } else {
        console.log('False')
    }
    console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export const handleRequest = async (e) => {
    e.preventDefault();
    try {
        const result = await instance.post(`authentication-token`, {
            username: "admin",
            password: "admin",

        })
        Cookies.set('token', result.data.token)
        
        return result.data.token

    } catch (err) {
        return err.message
    }
}

export const handleReq = async () => {

    try {
        const result = await instance.get(`admin_users`)

        return result.data['hydra:member']

    } catch (err) {
        return err.message
    }
}

