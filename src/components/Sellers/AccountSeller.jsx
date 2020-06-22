import React, { Fragment } from 'react';
import useFieldAccountVendor from '../../hooks/useFieldAccountVendor';
import { useState } from 'react';
import FieldAccountVendor from './FieldAccountVendor';
import styled from '@emotion/styled';

const ContentFields = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 1.5rem;
`;


const AccountSeller = () => {

    /* const [ FieldCompany ] = useFieldAccountVendor("Empresa"); */
    const [ company, setCompany ] = useState({
        title: 'Empresa',
        value: '',
        active: false,
        placeholder: 'Nombre de su empresa'
    });

    const [ emailVendor, setEmailVendor ] = useState({
        title: 'Email de empresa',
        value: '',
        active: false,
        placeholder: 'Email de empresa'
    });


    return (
        <div className="w-100 p-5">
            <h2>Ajustes de la Cuenta</h2>
            
            <div className="mt-5">
                <div className="col-4">
                    <div>
                        <h6>Información de la Cuenta</h6>
                        <hr/>
                    </div>
                    
                    <ContentFields>
                        <FieldAccountVendor field={company} setField={setCompany} />

                        <FieldAccountVendor field={emailVendor} setField={setEmailVendor} />

                        <FieldAccountVendor field={company} setField={setCompany} />

                        <FieldAccountVendor field={company} setField={setCompany} />

                        <FieldAccountVendor field={company} setField={setCompany} />
                    </ContentFields>                    
                </div>

                <div className="col-4">

                </div>
            </div>
        </div>
    );

}
 
export default AccountSeller;