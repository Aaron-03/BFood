import React, { Fragment, useState, useContext } from 'react';

import WelcomeSignUpSeller from './WelcomeSignUpSeller';
import FormSellerOne from './FormSellerOne';
import FormSellerTwo from './FormSellerTwo';
import FormSellerThree from './FormSellerThree';
import TimeLine from '../../../ui/TimeLine';
import useTimeLine from '../../../../hooks/useTimeLine';

import {
    ContainerGeneralSeller,
} from '../../../ui/Containers';
import VendorContext from '../../../../context/vendors/VendorContext';
import { useHistory } from 'react-router-dom';


const IndexSignUp = () => {

    const { currentVendor } = useContext(VendorContext);

    const initialProgress = {
        progress: '0%',
        position: '-5%'
    };

    const initialPage = 0;

    const [ timeline, page, setPage ] = useTimeLine(initialProgress, initialPage);

    const history = useHistory();

    if(currentVendor !== null) {
        history.push('/vendor/settings');
    }

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