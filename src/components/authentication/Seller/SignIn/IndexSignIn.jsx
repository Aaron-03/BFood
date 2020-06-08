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


const ContainerSignIn = styled.div`
    background-color: var(--custom-blue);
    height: 69vh;
    width: 100vw !important;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const IndexSignIn = () => {


    const { crtVendor, currentVendor, sendRequest } = useContext(VendorContext);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ sended, setSended ] = useState(false);

    const [ vendor, setVendor] = useState({
        username: '',
        password: ''
    });

    const { username, password } = vendor;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const minCaracters = 6;

        const nameValid = validFieldString(username, 4, 16);
        const passwordValid = validFieldString(password, minCaracters, 27);

        

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
            <Row className="justify-content-center align-items-center p-2 bg-danger col-12">
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
                                placeholder="INGRESE SU USUARIO"
                                name="username"
                                value={username}
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
                                placeholder="INGRESE SU CONTRASEÑA"
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