import styled from '@emotion/styled';


const BFoodTitle = styled.h1`
    display: inline-block;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--custom-red);
    font-size: 24pt;
    letter-spacing: 0.28em;
    color: var(--custom-white);
`;

const BFoodSubTitle = styled.h2`
    display: ${ props => props.customDisplay ? props.customDisplay : 'inline-block' };;
    color: black;
    font-size: ${ props => props.customSize ? props.customSize : '28px' };
    font-weight: ${ props => props.customBold === false ? '' : 'bold' };
    letter-spacing: ${ props => props.customSpacing ? props.customSpacing : '0.28rem' };;
`;

const BFoodLabel = styled.label`
    font-size: ${ props => props.customSize ? props.customSize : '10pt' };
    letter-spacing: 0.2rem;
    color: ${ props => props.customColor ? props.customColor : 'rgba(0, 0, 0, 0.6)' };
`;

const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: ${ props => props.customSize ? props.customSize : '14px' };
    line-height: ${ props => props.customLineHeight ? props.customLineHeight : '' };
    /* or 21px */

    letter-spacing: ${ props => props.customSpacing ? props.customSpacing : '0.15rem' };
`;

export {
    BFoodTitle,
    BFoodSubTitle,
    BFoodLabel,
    Paragraph
}