import React, { Fragment, useState, useEffect } from 'react';
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
    margin-top: 2.5rem;


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


const Vendor = ({vendor}) => {

    const [ tagNew, setTagNew ] = useState('');

    const {
        name,
        phone,
        img,
        web,
        esp,
        points,
        date,
        desc

    } = vendor;

    const isNew = (xdate) => {
        const current = Date.now();
        const dateNew = new Date(xdate).getTime();
        let result = (current - dateNew) / 1000 / 60 / 60 / 24;
        result = Math.floor(result);

        setTagNew(result < 7);
    }

    useEffect(() => {
        isNew(date);
    }, []);



    return (
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
                >{esp}</ElementTag>
                {
                tagNew ?
                <ElementTag
                    bgColor="#44B055"
                >Nuevo</ElementTag>
                : null
                }
                

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
                <h4>{name}</h4>

                <p>{desc}</p>
            </div>
        </ContentVendor>
    );
}
 
export default Vendor;