
const AuthToken = () => {

    const user = localStorage.getItem("token-auth-customer");

    if(user !== null || user !== undefined) {
        console.log(user);
        return JSON.parse(user);
    }

    console.log(user);
    return null;
};

export default AuthToken;