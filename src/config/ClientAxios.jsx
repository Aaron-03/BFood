import Axios from "axios";


const ClientAxios = Axios.create({
    baseURL: process.env.BFOOD_BACKEND
});
 
export default ClientAxios;