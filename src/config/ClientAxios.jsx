import Axios from "axios";


const ClientAxios = Axios.create({
    baseURL: process.env.REACT_APP_DEPLOY
});
 
export default ClientAxios;