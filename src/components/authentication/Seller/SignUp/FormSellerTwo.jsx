import React, { Fragment, useState, useContext, useEffect } from 'react';


import { Container, Row, FormGroup } from 'react-bootstrap';

import { FormSeller } from '../../../ui/Forms';

import { BFoodTitle, BFoodSubTitle } from '../../../ui/Texts';

import { ImageSvg } from '../../../ui/Images';

import { ContentInputText, InputText } from '../../../ui/Fields';

import { BtnSendData } from '../../../ui/Buttons';

import perfilImg from '../../../../assets/img/Form/avatar.svg';
import emailImg from '../../../../assets/img/Form/email.png';
import password1Img from '../../../../assets/img/Form/pass_1.svg';
import password2Img from '../../../../assets/img/Form/pass_2.svg';
import password3Img from '../../../../assets/img/Form/pass_3.svg';
import VendorContext from '../../../../context/vendors/VendorContext';
import { validFieldEmail, validFieldString } from '../../../../helpers/validations/formSellerValid';
import Swal from 'sweetalert2';


const FormSellerTwo = ({setPage}) => {


    const { crtVendor, currentVendor } = useContext(VendorContext);
    const [ error, setError ] = useState(false);

    const [ vendor, setVendor] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = vendor;

    const handleSubmit = (e) => {
        e.preventDefault();

        const minCaracters = 9;

        const nameValid = validFieldString(name, 4, 16);
        const emailValid = validFieldEmail(email);
        const passwordValid = validFieldString(password, minCaracters, 27);

        if(nameValid.active ||
           emailValid.status) {
            setError(true);
            
            Swal.fire({
                icon: 'error',
                title: 'Error al procesar datos',
                text: 'Todos los campos son obligatorios',
                timer: '3000'
            });

            return;
        }

        if(passwordValid.active) {
             setError(true);
             
             Swal.fire({
                 icon: 'error',
                 title: 'Error al procesar datos',
                 text: `La contraseña debe tener mínimo ${minCaracters} caracteres`,
                 timer: '3000'
             });

             return;
         }

        if(password.trim() !== password2.trim()) {
            setError(true);
            
            Swal.fire({
                icon: 'warning',
                title: 'Error al procesar datos',
                text: 'Las contraseñas no coinciden',
                timer: '3000'
            });

            return;
        }

        setError(false);
        crtVendor(vendor);

        setPage(3);
    }

    const handleBackClick = () => {
        setPage(1);
    }

    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {

        if(currentVendor) {
            setVendor({
                ...currentVendor,
                vendor
            });
        }

    // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Container>
                <Row className="justify-content-center align-items-center p-2">
                    <FormSeller
                        onSubmit={handleSubmit}
                        customMaxWidth="45rem"
                        className="col-sm-12 py-4 px-1"
                    >
                        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
                            <BFoodSubTitle
                                customSize="18pt"
                            >Único</BFoodSubTitle>

                            <BFoodTitle
                                className="ml-3"
                            >BFood</BFoodTitle>

                            <BFoodSubTitle
                                customSize="18pt"
                            >Especial</BFoodSubTitle>
                        </div>

                        <FormGroup className="mt-5">
                            <ContentInputText className="col-sm-10 m-auto">
                                <ImageSvg 
                                    customWidth="2.6rem"
                                    customHeight="2.6rem"
                                    src={perfilImg}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="text"
                                    placeholder="CREE UN NOMBRE DE USUARIO"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="mt-5">
                            <ContentInputText className="col-sm-10 m-auto">
                                <ImageSvg 
                                    customWidth="2rem"
                                    customHeight="2rem"
                                    className="ml-1"
                                    src={emailImg}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="email"
                                    placeholder="INGRESE SU EMAIL"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="mt-5">
                            <ContentInputText className="col-sm-10 m-auto">
                                <ImageSvg 
                                    customWidth="2rem"
                                    customHeight="2rem"
                                    className="ml-1"
                                    src={password1Img}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="password"
                                    placeholder="CREE UNA CONTRASEÑA"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="mt-5">
                            <ContentInputText className="col-sm-10 m-auto">
                                <ImageSvg 
                                    customWidth="2rem"
                                    customHeight="2rem"
                                    className="ml-1"
                                    src={password2Img}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="password"
                                    placeholder="CONFIRME SU CONTRASEÑA"
                                    name="password2"
                                    value={password2}
                                    onChange={handleChange}
                                />
                            </ContentInputText>
                        </FormGroup>


                        <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
                            <BtnSendData
                                onClick={handleBackClick}
                                className="mt-2 col-5"
                                bgColor="var(--custom-red)"
                            >ANTERIOR</BtnSendData>

                            <BtnSendData
                                className="mt-2 col-5"
                            >CONTINUAR</BtnSendData>
                        </div>
                    </FormSeller>
                </Row>
            </Container>
        </Fragment>
    );
}
 
export default FormSellerTwo;
