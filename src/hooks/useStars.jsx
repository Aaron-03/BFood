import React, { useState } from 'react';
import styled from '@emotion/styled';

import starImg from '../assets/img/General/star.svg';
import { ImageSvg } from '../components/ui/Images';


const ContextStars = styled.div`
    width: ${ props => props.customWidth ? props.customWidth : '100%' };
    height: ${ props => props.customHeight ? props.customHeight : '100%' };
    padding: 0.2rem;
`;

const ContentImg = styled.div`
    width: 1rem;
    height: 1rem;
`;


const useStars = (initialState, cantStars) => {

    const [ stars, setStars ] = useState(initialState);


    return (
        <ContextStars>
            {
            cantStars.map(star => (
                <ContentImg
                    key={star.id}
                >
                    <ImageSvg
                        customWidth="100%"
                        customHeight="100%"
                    />
                </ContentImg>
            ))
            }
        </ContextStars>
    );
}
 
export default useStars;