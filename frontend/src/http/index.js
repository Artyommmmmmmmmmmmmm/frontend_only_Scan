import axios from 'axios'

import { BASE_URL } from '../global_const';

const $api = axios.create({
    // withCredentials: true,
    baseURL: BASE_URL, 
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    // config.headers.Access-Control-Allow-Origin = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;
