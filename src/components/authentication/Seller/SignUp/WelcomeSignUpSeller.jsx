import React from 'react';


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
    Paragraph
} from '../../../ui/Texts';

import {
    ImageSvg
} from '../../../ui/Images';

import {
    BtnSendData
} from '../../../ui/Buttons';

import scooter2Img from '../../../../assets/img/Company/scooter-2.svg';


const WelcomeSignUpSeller = () => {


    return (
        <Container>
            <Row className="justify-content-center align-items-center p-2">
                <FormSeller className="col-sm-8 p-4">
                    <div className="col-sm-10 text-center m-auto p-2">
                        <BFoodTitle
                            className="mr-2"
                        >BFood</BFoodTitle>

                        <BFoodSubTitle
                            className="ml-2"
                        >Vendors</BFoodSubTitle>
                    </div>

                    <FormGroup>
                        <BFoodSubTitle
                            className="mt-4"
                            customSize="12pt"
                        >¡Bienvenido!</BFoodSubTitle>

                        <Paragraph className="p-4">
                            BFood, es una nueva forma de enviar alimentos de forma salubre y brinda la oportunidad de mantener la continuidad de su negocio. Todo gestionado a travéz de nuestro panel de administración personalizado.
                        </Paragraph>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <BFoodSubTitle
                            className="my-2 text-center"
                            customDisplay="block"
                            customSize="12pt"
                        >¡ÚNETE A ESTA NUEVA INICIATIVA!</BFoodSubTitle>

                        <ImageSvg src={scooter2Img} alt=""/>
                    </FormGroup>

                    <FormGroup className="text-center p-2 mt-4">
                        <BtnSendData customWidth="16rem">
                            CONTINUAR
                        </BtnSendData>
                    </FormGroup>
                </FormSeller>
            </Row>
        </Container>
    );
}
 
export default WelcomeSignUpSeller;