import React, { useState } from 'react';

import styled from '@emotion/styled';

import logoImg from '../../../assets/img/scooter.svg';
import cardImg from '../../../assets/img/card.svg';


import nameImg from '../../../assets/img/letter.png';
import emailImg from '../../../assets/img/email.png';
import addressImg from '../../../assets/img/address.png';
import companyImg from '../../../assets/img/company.png';
import worldImg from '../../../assets/img/world.png';
import phoneImg from '../../../assets/img/phone.png';

import { Link } from 'react-router-dom';

import {
    Container,
    Form,
    FormGroup,
    FormControl,
    Image
} from 'react-bootstrap';


import { validFieldString, validFieldEmail } from '../../../helpers/validations/formSellerValid';
import Swal from 'sweetalert2';





const ContainerLogin = styled.div`
    height: 100vh;
    background-color: var(--custom-blue);
    display: flex;
    justify-content: center;
    align-items: center;

    > div:nth-of-type(1) {
        width: 100%;
        padding: 0rem;
    }
`;

const FormLoginSeller = styled(Form)`
    position: relative;
    background-color: var(--custom-white);
    height: auto;
    margin: auto;
    padding: 0.5rem;
    border: 3px solid var(--custom-black);
    border-radius: 27px;

    #textSignUp {
        margin-top: 1.5rem;
        text-align: center;
        color: var(--custom-black);
        font-size: 10pt;
    }
    #textSignUp a {
        text-decoration: underline;
        color: var(--custom-red);
    }

    .btn_null_pointer {
        cursor: not-allowed;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const LabelsForms = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    label {
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
        font-weight: bold;
        letter-spacing: 0.12rem;
        font-size: 14pt;
    }
    
`;

const TitleLogo = styled.h4`
    padding: 0.5rem;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 16pt;
    letter-spacing: 0.28rem;
    font-weight: bold;
    color: var(--custom-red);
`;

const ImageLogo = styled.div`
    position: absolute;
    top: -3.6rem;
    display: inline-block;
    border-radius: 25rem;
    background-color: var(--custom-white);
    width: 7.5rem;
    height: 7.5rem;
    padding: 1rem;
    border: 3px solid var(--custom-black);

    
`;

const ImageLogoImg = styled(Image)`
    width: 100%;
`;

const FormControlContent = styled.div`
    position: relative;

    > input {
        font-size: 10pt;
        padding: 1.2rem;
        margin: auto;
    }

    #keyImgId {
        padding: 0.4rem;
    }
`;

const IconInput = styled.img`
    width: 1.7rem; 
    height: 1.7rem;
    border-radius: 0.25rem;
    z-index: 1;
    padding: 0.1rem;
    float: left;
    margin-top: 0.4rem;

    @media (max-width: 600px) {
        position: absolute;
        left: 1.5rem;
        top: 0px;
    }
`;

const BtnLogin = styled.button`
    display: inline-block;
    width: 9.5rem;
    height: 2.5rem;
    border-radius: 12px;
    font-weight: bold;
    text-align: center;
    color: var(--custom-white);
    background-color: var(--custom-blue);
    border: 3px solid var(--custom-black);
    transition: 0.4s all;

    &:hover {
        opacity: 0.8;
    }
`;




const SignUpFormSeller = () => {

    const [ error, setError ] = useState(true);
    const [ errors, setErrors ] = useState({
        nameError: {
            active: true,
            message: ''
        },
        rsocialError: {
            active: true,
            message: ''
        },
        rucError: {
            active: true,
            message: ''
        },
        emailError: {
            active: true,
            message: ''
        },
        addressError: {
            active: true,
            message: ''
        },
        urlWebError: {
            active: true,
            message: ''
        },
        phoneError: {
            active: true,
            message: ''
        }
    });


    const [ vendor, setVendor ] = useState({
        name: '',
        rsocial: '',
        ruc: '',
        email: '',
        address: '',
        urlWeb: '',
        phone: ''
    });

   
    const { name, rsocial, ruc, email, address, urlWeb, phone } = vendor;

    const validFields = (e) => {
        if(e.target.name === 'name') {
            const nameError = validFieldString(name, 4, 20, 'El nombre referencial debe estar entre 4 y 20 caracteres');
            setErrors({
                ...errors,
                nameError: nameError
            });
            return;
        }

        if(e.target.name === 'rsocial') {
            const rsocialError = validFieldString(rsocial, 1, 100, 'La razón social no debe estar vacía');
            setErrors({
                ...errors,
                rsocialError: rsocialError
            });
            return;
        }
        
        if(e.target.name === 'ruc') {
            const rucError = validFieldString(ruc, 11, 11, 'El RUC debe ser de 11 dígitos');
            setErrors({
                ...errors,
                rsocialError: rucError
            });
            return;
        }

        if(e.target.name === 'email') {
            const emailError = validFieldEmail(email);
            setErrors({
                ...errors,
                rsocialError: emailError
            });
            return;
        }

        if(e.target.name === 'address') {
            const addressError = validFieldString(address, 4, 100, 'La dirección no es válida');
            setErrors({
                ...errors,
                rsocialError: addressError
            });
            return;
        }

        if(e.target.name === 'urlWeb') {
            const urlWebError = validFieldString(urlWeb, 4, 100, 'La URL ingresada no es válida');
            setErrors({
                ...errors,
                rsocialError: urlWebError
            });
            return;
        }

        if(e.target.name === 'phone') {
            const phoneError = validFieldString(phone, 4, 20, 'El teléfono no es válido');
            setErrors({
                ...errors,
                rsocialError: phoneError
            });
            return;
        }
    }

    const handleChange = (e) => {

        validFields(e);

        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });

        if(name.trim() === ''     ||
           rsocial.trim() === ''  ||
           ruc.trim() === ''      ||
           ruc.trim().length < 10 ||
           email.trim() === ''    ||
           address.trim() === ''  ||
           phone.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }

        // setTimeout(() => {
        //     if(errors.nameError.active    ||
        //        errors.rsocialError.active ||
        //        errors.rucError.active     ||
        //        errors.emailError.active   ||
        //        errors.addressError.active ||
        //        errors.urlWebError.active  ||
        //        errors.phoneError.active) {
        //          setError(true);
        //          console.log('true');
        //      } else {
        //         setError(false);
        //         console.log('false');
        //      }
        // }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError(false);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su solicitud se envió correctamente',
            showConfirmButton: false,
            timer: 2000
        });
    }



    return (
        <ContainerLogin>
            <Container>
                <FormLoginSeller
                    onSubmit={handleSubmit}
                    className="col-md-7">
                    <div className="d-flex justify-content-center">
                        <ImageLogo>
                            <ImageLogoImg src={logoImg} alt=""/>
                        </ImageLogo>
                    </div>

                    <LabelsForms>
                        <label>ÚNICO</label>
                        <label>ESPECIAL</label>
                    </LabelsForms>

                    <TitleLogo>BFood</TitleLogo>

                    <FormGroup>
                        <FormControlContent className="col-sm-10 mx-auto">
                            <IconInput src={nameImg} className="col-sm-2" />

                            <FormControl
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleChange}
                                placeholder="INGRESE UN NOMBRE REFERENCIAL"
                                className="col-sm-10 text-center"
                                data-error="nameError"
                            />
                            
                            {/* <div className="valid-feedback text-right pr-5">Success! You've done it.</div> */}
                        </FormControlContent>

                        <FormControlContent className="col-sm-10 mx-auto mt-3">
                            <IconInput src={companyImg} className="col-sm-2" />

                            <FormControl
                                name="rsocial"
                                type="text"
                                value={rsocial}
                                onChange={handleChange}
                                placeholder="RAZ. SOCIAL DE SU NEGOCIO O EMPRESA"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>
                    </FormGroup>

                    <FormGroup>
                        <FormControlContent className="col-sm-10 mx-auto">
                            <IconInput src={cardImg} className="col-sm-2" />

                            <FormControl
                                name="ruc"
                                type="number"
                                value={ruc}
                                onChange={handleChange}
                                placeholder="INGRESE SU N° RUC: 11 dígitos"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>

                        <FormControlContent className="col-sm-10 mx-auto mt-3">
                            <IconInput src={emailImg} className="col-sm-2" />

                            <FormControl
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="DIRECCIÓN DE CORREO ELECTRÓNICO"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>
                    </FormGroup>

                    <FormGroup>
                        <FormControlContent className="col-sm-10 mx-auto">
                            <IconInput src={addressImg} className="col-sm-2" />

                            <FormControl
                                name="address"
                                type="text"
                                value={address}
                                onChange={handleChange}
                                placeholder="DIRECCIÓN DE SU NEGOCIO"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>
                    </FormGroup>

                    <FormGroup>
                        <FormControlContent className="col-sm-10 mx-auto">
                            <IconInput src={worldImg} className="col-sm-2" />

                            <FormControl
                                name="urlWeb"
                                type="url"
                                value={urlWeb}
                                onChange={handleChange}
                                placeholder="DIRECCIÓN DE PÁGINA WEB (OPCIONAL)"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>

                        <FormControlContent className="col-sm-10 mx-auto mt-3">
                            <IconInput src={phoneImg} className="col-sm-2" />

                            <FormControl
                                name="phone"
                                type="number"
                                value={phone}
                                onChange={handleChange}
                                placeholder="N° CONTACTO ej: 987654321"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>
                    </FormGroup>

                    <FormGroup className="text-center mt-4">
                        <BtnLogin
                            disabled={error}
                            className={error ? 'btn_null_pointer': ''}
                        >REGISTRARME</BtnLogin>
                    </FormGroup>

                    <p id="textSignUp">
                        ¿Ya tiene una cuenta?
                        &nbsp;
                        <Link to="/vendor/signin">
                            ¡Quiero Ingresar!
                        </Link>
                        
                    </p>
                </FormLoginSeller>
            </Container>
        </ContainerLogin>
    );
}
 
export default SignUpFormSeller;