import React, { Fragment } from 'react';
import VendorContext from '../../../context/vendors/VendorContext';
import { useContext } from 'react';
import SucursalCard from './SucursalCard';



const SucursalListCard = () => {

    const { offices } = useContext(VendorContext);

    return (
        <Fragment>
            {
            offices.map(office => (
                <SucursalCard key={office.id} office={office} />
            ))
            }
        </Fragment>
    );
}
 
export default SucursalListCard;