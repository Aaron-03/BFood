import React, { Fragment } from 'react';

import styled from '@emotion/styled';

import {
    ImageSvg
} from './Images';

import logoImg from '../../assets/img/Company/scooter.svg';
import { BFoodLabel } from './Texts';

const ContainerTimeLine = styled.div`
    position: relative;
    width: 100vw;
    height: 1.5rem;
    display: flex;
    align-items: center !important;
    background-color: var(--custom-white);
    border: 3px solid var(--custom-black);
    border-radius: 2rem;

    @media screen and (max-width: 767px) {
        height: 1.2rem;
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        width: ${props => props.customWidth ? props.customWidth : '0%' };
        border-radius: 2rem;
        background-color: var(--custom-green);
        transition: all 0.8s;
        
    }
`;

const ContentLogoImg = styled.div`
    position: absolute;
    left: ${ props => props.customLeft ? props.customLeft : '0%' };
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: white;
    padding: 0.8rem;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8s;
    z-index: 3;
    

    @media screen and (max-width: 767px) {
        /* width: 4rem;
        height: 4rem; */
        display: none;
    }
`;

const ContainerPoints = styled.div`
    position: absolute;
    width: 100%;
    bottom: -75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CirclePoint = styled.div`
    width: 3rem;
    height: 3rem;
    border: 3px solid black;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: var(--custom-red);
    border-radius: 50%;
    z-index: 2;

    &::before {
        content: '';
        width: 80%;
        height: 80%;
        background-color: white;
        border: 3px solid black;
        border-radius: 50%;
        transition: all 0.8s ease-in;
    }

    @media screen and (max-width: 767px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const ContentTextsTimeLine = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin-top: 2rem;

    label {
        color: white;
    }
`;


const TimeLine = ({timeline}) => {

    const { progress, position } = timeline;

    /*
        0°: progressWidth = 0%;  positionLogo = -5%;
        1°: progressWidth = 25%;  positionLogo = 20%;
        2°: progressWidth = 75%;  positionLogo = 70%;
        3°: progressWidth = 100%;  positionLogo = 95%;
    */

    return ( 
        <Fragment>
            <div className="container">
                <div id="progressBar" className="row justify-content-center align-items-center p-4 m-5">
                    <ContainerTimeLine customWidth={progress} className="d-flex">
                        {/* <ProgressBar
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            customWidth={progress}></ProgressBar> */}

                        <ContentLogoImg customLeft={position}>
                            <ImageSvg
                                customWidth="100%"
                                customHeight="100%"
                                src={logoImg}
                            />
                        </ContentLogoImg>

                        <ContainerPoints>
                            <CirclePoint></CirclePoint>

                            <CirclePoint></CirclePoint>
                        </ContainerPoints>
                    </ContainerTimeLine>

                    <ContentTextsTimeLine>
                        <BFoodLabel>Oportunidad BFood</BFoodLabel>
                        <BFoodLabel className="col-6 text-center mr-2">Registro de solicitud</BFoodLabel>
                        <BFoodLabel>Info de solicitud</BFoodLabel>
                    </ContentTextsTimeLine>
                </div>
            </div>
        </Fragment>
     );
}
 
export default TimeLine;