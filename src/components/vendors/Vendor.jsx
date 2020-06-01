import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import {
    ImageSvg
} from '../ui/Images';


import pizzaImg from '../../assets/img/Vendors/pizza.jpg';
import clockImg from '../../assets/img/Vendors/clock.svg';


const ContentVendor = styled.div`
    position: relative;
    width: 24rem;
    height: 18rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 3px 3px 10px dimgray;
    transition: all 0.4s;


    .descriptionVendor {
        color: white;
        margin-top: 7rem;
    }
    .descriptionVendor p {
        color: white;
        overflow-wrap: break-word;
        font-size: 12pt;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.05);
    }
`;

const ContentBackground = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
`;

const ElementTag = styled.div`
    background-color: ${ props => props.bgColor ? props.bgColor : "var(--custom-blue)" };
    color: ${ props => props.customColor ? props.customColor : "var(--custom-white)" };
    padding: 0rem 1rem;
    border: 2px solid ${ props => props.borderColor ? props.borderColor : "var(--custom-white)" };
    border-radius: 2rem;
    font-size: 10pt;
    margin-right: 0.5rem;
    height: ${ props => props.customHeight ? props.customHeight : "1.5rem" };
    z-index: 2;

    &:nth-last-of-type() {
        margin-right: 0rem;
    }
`;

const ImgTag = styled.img`
    width: ${ props => props.customWidth ? props.customWidth : "100%" };
    height: ${ props => props.customHeight ? props.customHeight : "100%" };
`;


const Vendor = () => {



    return (
        <Fragment>
            <ContentVendor>
                <ContentBackground>
                    <ImageSvg
                        customOpacity="0.5"
                        customWidth="100%"
                        customHeight="100%"
                        src={pizzaImg}
                    />
                </ContentBackground>

                <div className="d-flex justify-content-start align-items-center">
                    <ElementTag
                        bgColor="var(--custom-blue)"
                    >Pizzas y Pastas</ElementTag>

                    <ElementTag
                        bgColor="#44B055"
                    >Nuevo</ElementTag>

                    <ElementTag
                        bgColor="var(--custom-red)"
                    >
                        <ImgTag
                            customWidth="0.5rem"
                            customHeight="0.5rem"
                            src={clockImg}
                        />
                    </ElementTag>
                </div>

                <div className="descriptionVendor">
                    <h4>DOMINOS PIZZA</h4>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Hic aliquam ex minima? Amet tempora,
                        vero a recusandae sit at.
                    </p>
                </div>
            </ContentVendor>
        </Fragment>
    );
}
 
export default Vendor;