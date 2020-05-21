import React, { Fragment } from 'react';

import styled from '@emotion/styled';

import {
    Container,
    Row,
    FormGroup
} from 'react-bootstrap';

import {
    FormSeller
} from '../../../ui/Forms';

import {
    BFoodTitle,
    BFoodSubTitle,
    BFoodLabel
} from '../../../ui/Texts';

import {
    ImageSvg
} from '../../../ui/Images';

import {
    ContentInputText,
    InputText,
    InputFile
} from '../../../ui/Fields';

import {
    BtnSendData
} from '../../../ui/Buttons';

import cardImg from '../../../../assets/img/Form/card.svg';
import phoneImg from '../../../../assets/img/Form/phone.png';


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
    position: absolute;
    bottom: -18px;
    width: 100%;
    padding: 0.1rem 2.5rem;
    text-align: center;
    opacity: 0.6;
`;



const FormSellerOne = () => {


    return (
        <Fragment>
            <Container>
                <Row className="justify-content-center align-items-center p-2">
                    <FormSeller
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
                                />
                            </ContentInputText>
                        </FormGroup>

                        <FormGroup className="mt-5 position-relative">
                            <ContentInputText className="col-sm-10 m-auto py-5">
                                <BFoodLabel
                                    className="col-6 mb-2"
                                    customSize="8pt"
                                >CERTIFICADO DE OPERATIVIDAD (PDF, JPG O PNG)</BFoodLabel>

                                <div className="col-6 d-flex justify-content-around align-items-center mb-1">
                                    <CustomInputFile
                                        htmlFor="fileId"
                                    >SELECCIONE UN ARCHIVO</CustomInputFile>

                                    <InputFile id="fileId" name="file" type="file" />

                                    <QuestionFile
                                        title="El certificado de operatividad es un documento, emitido por un ente regulador, que le da permiso a la empresa de operar con normalidad"
                                        id="questionFile"
                                    >?</QuestionFile>
                                </div>

                            </ContentInputText>
                            <CustomParagraph>Ruta del archivo</CustomParagraph>
                        </FormGroup>

                        <FormGroup className="text-center mt-5">
                            <BFoodSubTitle
                                className="text-center"
                                customDisplay="block"
                                customSize="12pt"
                            >¡ÚNETE A ESTA NUEVA INICIATIVA!</BFoodSubTitle>

                        </FormGroup>

                        <FormGroup className="text-center p-2 mt-4">
                            <BtnSendData customWidth="16rem">
                                CONTINUAR
                            </BtnSendData>
                        </FormGroup>
                    </FormSeller>
                </Row>
            </Container>
        </Fragment>
    );
}
 
export default FormSellerOne;