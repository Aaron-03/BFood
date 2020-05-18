import React, { useState } from 'react';

import styled from '@emotion/styled';


import logoImg from '../../../assets/img/scooter.svg';
import cardImg from '../../../assets/img/card.svg';
import keyImg from '../../../assets/img/door-key.svg';

import { Link } from 'react-router-dom';

import {
    Container,
    Form,
    FormGroup,
    FormControl,
    Image

} from 'react-bootstrap';

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
    height: 25rem;
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
    width: 2.5rem; 
    height: 2.5rem;
    border-radius: 0.25rem;
    z-index: 1;
    padding: 0.1rem;
    float: left;

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

const FooterLogin = styled.div`
    position: fixed;
    left: 1.5rem;
    bottom: 1.5rem;
    
    a {
        text-decoration: none;
        color: var(--custom-white) !important;
        font-size: 10pt;
    }

    a span {
        text-decoration: underline;
    }
`;

const LoginFormSeller = () => {

    const [ error, setError ] = useState(false);
    const [ vendor, setVendor ] = useState({
        username: '',
        password: ''
    });

    const { username, password } = vendor;


    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username.trim() === '' ||
           password.trim() === '') {
            setError(true);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
                showConfirmButton: false
            })
            return;
        }

        setError(false);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ha ingresado correctamente',
            showConfirmButton: false,
            timer: 2000
        });
    }
    
    return (
        <ContainerLogin>
            <Container>
                <FormLoginSeller
                    onSubmit={handleSubmit}
                    className="col-md-7"
                >
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
                            <IconInput id="cardImgId" src={cardImg} className="col-sm-2" />

                            <FormControl
                                name="email"
                                type="email"
                                value={username}
                                onChange={handleChange}
                                placeholder="INGRESE SU RUC O EMAIL"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>

                        <FormControlContent className="col-sm-10 mx-auto mt-3">
                            <IconInput id="keyImgId" src={keyImg} className="col-sm-2" />

                            <FormControl
                                name="email"
                                type="email"
                                value={password}
                                onChange={handleChange}
                                placeholder="INGRESE SU PASSWORD"
                                className="col-sm-10 text-center"
                            />
                        </FormControlContent>
                    </FormGroup>

                    <FormGroup className="text-center mt-4">
                        <BtnLogin>INGRESAR</BtnLogin>
                    </FormGroup>

                    <p id="textSignUp">
                        ¿Aún no tiene una cuenta?
                        &nbsp;
                        <Link to="/vendor/signup">
                            Regístrece
                        </Link>
                        
                    </p>
                </FormLoginSeller>
            </Container>

            <FooterLogin>
                <a href="/vendor/signin">No puede ingresar? <span>Comuníquese con nosotros</span></a>
            </FooterLogin>
        </ContainerLogin>
    );
}
 
export default LoginFormSeller;