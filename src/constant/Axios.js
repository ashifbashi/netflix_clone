import axios from 'axios';
import { apiBaseUrl } from './url';


const Instance = axios.create({
    baseURL: apiBaseUrl,
});


export default Instance;