import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://one-good-deed-1994.firebaseio.com/'
});

export default instance;