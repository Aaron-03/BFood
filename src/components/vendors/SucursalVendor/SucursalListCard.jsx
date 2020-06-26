import React, { Fragment } from 'react';
import VendorContext from '../../../context/vendors/VendorContext';
import { useContext } from 'react';
import SucursalCard from './SucursalCard';
import styled from '@emotion/styled';



const ContentOffices = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    row-gap: 2rem;
`;


const SucursalListCard = () => {

    const { offices } = useContext(VendorContext);

    return (
        <Fragment>
            <ContentOffices>
            {
            offices.map(office => (
                <SucursalCard key={office.id} office={office} />
            ))
            }
            </ContentOffices>
        </Fragment>
    );
}
 
export default SucursalListCard;