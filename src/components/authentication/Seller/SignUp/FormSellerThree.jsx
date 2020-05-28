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
    BFoodLabel,
    Paragraph
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


const ContentInfo = styled.div`
    background-color: #EBEBEB;
    display: flex;
    align-items: center;
    padding: 0.25rem;
`;


const FormSellerThree = ({setPage}) => {


    const handleSubmit = (e) => {
        e.preventDefault();


    }

    const handleBackClick = () => {
        setPage(2);
    }


    return (
        <Fragment>
            <Container>
                <Row className="justify-content-center align-items-center p-2">
                    <FormSeller
                        onSubmit={handleSubmit}
                        customMaxWidth="40rem"
                        className="col-sm-12 px-2"
                    >
                        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
                            <BFoodSubTitle
                                customSize="16pt"
                            >Solicitud</BFoodSubTitle>

                            <BFoodTitle
                                className="ml-3"
                            >BFood</BFoodTitle>

                            <BFoodSubTitle
                                customSize="16pt"
                            >Vendedores</BFoodSubTitle>
                        </div>

                        <FormGroup className="col-10 mx-auto my-0 mt-2 p-1">
                            <BFoodSubTitle
                                className="mt-4"
                                customSize="8.5pt"
                                customSpacing="0.1rem"
                            >Resumen de la solicitud de registro:</BFoodSubTitle>
                        </FormGroup>

                        <FormGroup className="col-10 mx-auto mt-2 p-1">
                            <BFoodLabel>Información de la empresa</BFoodLabel>

                            <div>
                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">ruc:</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">12345678910</Paragraph>
                                </ContentInfo>

                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">certificado:</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">mycertified.pdf</Paragraph>
                                </ContentInfo>

                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">n° contacto:</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">987645321</Paragraph>
                                </ContentInfo>
                            </div>
                        </FormGroup>

                        <FormGroup className="col-10 mx-auto mt-4 p-1">
                            <BFoodLabel>Información del perfil</BFoodLabel>

                            <div>
                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">ruc:</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">12345678910</Paragraph>
                                </ContentInfo>

                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">certificado:</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">mycertified.pdf</Paragraph>
                                </ContentInfo>

                                <ContentInfo>
                                    <BFoodLabel className="col-4 text-right m-0">n° contacto::</BFoodLabel>
                                    <Paragraph className="col-8 text-left m-0 p-0">987645321</Paragraph>
                                </ContentInfo>
                            </div>
                        </FormGroup>
                        
                        <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
                            <BtnSendData
                                onClick={handleBackClick}
                                className="mt-2 col-3"
                                bgColor="var(--custom-red)"
                            >ANTERIOR</BtnSendData>

                            <BtnSendData
                                className="mt-2 col-3"
                                bgColor="#EBEBEB"
                                customColor="black "
                            >IMPRIMIR</BtnSendData>

                            <BtnSendData
                                className="mt-2 col-4"
                                bgColor="rgba(68, 176, 85, 1)"
                            >ENVIAR</BtnSendData>
                        </div>
                    </FormSeller>
                </Row>
            </Container>
        </Fragment>
    );
}
 
export default FormSellerThree;
