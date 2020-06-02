import React, { Fragment, useState, useContext, useEffect } from 'react';

import styled from '@emotion/styled';

import { Container, Row, FormGroup } from 'react-bootstrap';

import { FormSeller } from '../../../ui/Forms';

import { ContentLoading } from '../../../ui/Containers';

import { BFoodTitle, BFoodSubTitle, BFoodLabel } from '../../../ui/Texts';

import { ImageSvg } from '../../../ui/Images';

import { ContentInputText, InputText, InputFile } from '../../../ui/Fields';

import { BtnSendData } from '../../../ui/Buttons';

import cardImg from '../../../../assets/img/Form/card.svg';
import phoneImg from '../../../../assets/img/Form/phone.png';
import worldImg from '../../../../assets/img/Form/world.png';
import VendorContext from '../../../../context/vendors/VendorContext';
import Swal from 'sweetalert2';

const CustomInputFile = styled(BFoodLabel)`
    background-color: var(--custom-red);
    border: 2px solid #000000;
    
    font-size: 7pt;
    padding: 0.2rem;
    height: 2.5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const QuestionFile = styled.span`
  background-color: rgba(196, 196, 196, 0.5);
  width: 2rem;
  height: 2rem;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  border-radius: 50%;
`;

const CustomParagraph = styled.p`
    padding: 0px;
    margin: 0px;
    text-align: justify;
    opacity: 1;
    font-weight: bold;
    font-size: 12pt;
    color: var(--custom-blue);
`;

const FormSellerOne = ({setPage}) => {
    

    const { crtVendor, currentVendor, validateRuc } = useContext(VendorContext);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const [ vendor, setVendor] = useState({
        ruc: '',
        phone: '',
        certified: '',
        urlWeb: ''
    });

    const { ruc, phone, certified, urlWeb } = vendor;

    let pathFile = typeof certified !== 'string' ? certified.name || '' : null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(ruc.trim().length !== 11) {
            setError(true);

            Swal.fire({
                icon: 'error',
                title: 'Error al procesar datos',
                text: 'El RUC debe ser de 11 dígitos',
                timer: '3000'
            });
            return;
        }

        if(phone.trim() === '' ||
           certified === null ||
           certified === undefined ||
           typeof certified === 'string') {

            setError(true);
            Swal.fire({
                icon: 'error',
                title: 'Error al procesar datos',
                text: 'Complete los campos obligatorios',
                timer: '3000'
            });
            return;
        }

        setError(false);

        setLoading(true);
        const rucValid = await validateRuc(ruc);
        setLoading(false);

        if(!rucValid.status) {
            Swal.fire({
                icon: 'error',
                text: 'El RUC no es válido',
                timer: '3000'
            });

            return;
        }

        crtVendor(vendor);
        setPage(2);
    }

    const handleBackClick = () => {
        setPage(0);
    }

    const handleChange = (e) => {

        if(e.target.name === 'certified') {
            setVendor({
                ...vendor,
                [e.target.name]: e.target.files[0]
            });
            return;
        }

        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {

        if(currentVendor) {
            setVendor(currentVendor);
        }

    // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            {
            loading
            ? <ContentLoading>
                <div className="spinner-border text-danger"></div>
            </ContentLoading>
            : null
            }

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
                                    src={cardImg}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="text"
                                    placeholder="INGRESE SU N° RUC"
                                    name="ruc"
                                    value={ruc}
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
                                    src={phoneImg}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="text"
                                    placeholder="INGRESE N° DE CONTACTO"
                                    name="phone"
                                    value={phone}
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
                                    src={worldImg}
                                />

                                <InputText
                                    className="col-10 text-left"
                                    type="text"
                                    placeholder="INGRESE SU PÁGINA WEB (OPCIONAL)"
                                    name="urlWeb"
                                    value={urlWeb}
                                    onChange={handleChange}
                                />
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="mt-5">
                            <ContentInputText
                                // customDisplay="normal"
                                customFdirection="column"
                                customHeight="auto"
                                className="col-sm-10 m-auto"
                            >

                                <div className="row align-items-center mb-4 w-100">
                                    <BFoodLabel
                                        className="col-6"
                                        customSize="8pt"
                                    >CERTIFICADO DE OPERATIVIDAD (PDF, JPG O PNG)</BFoodLabel>

                                    <div className="col-6 d-flex justify-content-around align-items-center">
                                        <CustomInputFile
                                            htmlFor="fileId"
                                        >SELECCIONE UN ARCHIVO</CustomInputFile>

                                        <InputFile
                                            id="fileId"
                                            name="certified"
                                            onChange={handleChange}
                                            type="file"
                                        />

                                        <QuestionFile
                                            title="El certificado de operatividad es un documento, emitido por un ente regulador, que le da permiso a la empresa de operar con normalidad"
                                            id="questionFile"
                                        >?</QuestionFile>
                                    </div>
                                </div>

                                <CustomParagraph
                                    title="Mi certificado de operatividad"
                                >{pathFile}</CustomParagraph>
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="text-center mt-5">
                            <BFoodSubTitle
                                className="text-center"
                                customDisplay="block"
                                customSize="12pt"
                            >¡ÚNETE A ESTA NUEVA INICIATIVA!</BFoodSubTitle>

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
 
export default FormSellerOne;
