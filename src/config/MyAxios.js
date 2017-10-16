import axios from 'axios';

export const MyAxios = axios.create({
    baseURL: 'http://mathpt.webstarterz.com/api',
    headers: {
        'X-Math-Api-Key': 'manh123@abc'
    }
});