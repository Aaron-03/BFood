import React, { useContext, useState } from 'react';
import VendorContext from '../../../../context/vendors/VendorContext';



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
import { validFieldString, validFieldEmail } from '../../../../helpers/validations/formSellerValid';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';


const ContainerSignIn = styled(Container)`
    background-color: var(--custom-blue);
`;



const IndexSignIn = () => {


    const { crtVendor, currentVendor, sendRequest } = useContext(VendorContext);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ sended, setSended ] = useState(false);

    const [ vendor, setVendor] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = vendor;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const minCaracters = 6;

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

        if(password === undefined || password2 === undefined) {
            Swal.fire({
                icon: 'warning',
                title: 'Error al procesar datos',
                text: 'Las contraseñas no coinciden',
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

        setLoading(true);
        // await sendRequest();
        setLoading(false);

        setError(false);
        crtVendor(vendor);
    }


    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    }


    return (
        <ContainerSignIn>
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


                    <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
                        <BtnSendData
                            className="mt-2 col-5"
                        >INGRESAR</BtnSendData>
                    </div>
                </FormSeller>
            </Row>
        </ContainerSignIn>
    );
}
 
export default IndexSignIn;