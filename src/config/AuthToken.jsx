import ClientAxios from "./ClientAxios";

const AuthToken = (token) => {
    if(token) {
        ClientAxios.defaults.auth = { token };
    } else {
        delete ClientAxios.defaults.headers.common['Authorization'];
    }
};

export default AuthToken;