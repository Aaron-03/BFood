
export const validFieldString = (input, min, max, options = '') => {

    let inputError = {
        active: false,
        message: 'Ok'
    };

    if(input.trim().length < min || input.trim().length > max) {
        inputError.active = true;
        inputError.message = options.trim() !== '' ? options : `Debe estar entre ${min} y ${max} caracteres`;
    }

    return inputError;
}

export const validFieldEmail = (input, options = '') => {

    let inputError = {
        status: false,
        message: 'OK'
    };

    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if(!emailRegex.test(input)) {
        inputError.status = true;
        inputError.message = options.trim() !== '' ? options : 'El email es incorrecto';
    }

    return inputError;
}