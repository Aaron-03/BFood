import React, { Fragment, useState } from 'react';

import WelcomeSignUpSeller from './WelcomeSignUpSeller';
import FormSellerOne from './FormSellerOne';
import FormSellerTwo from './FormSellerTwo';
import FormSellerThree from './FormSellerThree';
import TimeLine from '../../../ui/TimeLine';
import useTimeLine from '../../../../hooks/useTimeLine';

import {
    ContainerGeneralSeller,
} from '../../../ui/Containers';


const IndexSignUp = () => {

    const initialProgress = {
        progress: '0%',
        position: '-5%'
    };

    const initialPage = 0;

    const [ timeline, page, setPage ] = useTimeLine(initialProgress, initialPage);

    return (
        <Fragment>
            {/* <Header /> */}
            <ContainerGeneralSeller className="pb-4">
            <TimeLine timeline={timeline} />

            {
                  page === 0 ? <WelcomeSignUpSeller setPage={setPage} />
                : page === 1 ? <FormSellerOne setPage={setPage} />
                : page === 2 ? <FormSellerTwo setPage={setPage} />
                : page === 3 ? <FormSellerThree setPage={setPage} />
                : null
            }
            </ContainerGeneralSeller>
        </Fragment>
    );
}
 
export default IndexSignUp;