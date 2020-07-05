import Axios from 'axios';

const ClientAxios = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default ClientAxios;
