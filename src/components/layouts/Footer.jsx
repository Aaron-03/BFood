import React from 'react';

import styled from '@emotion/styled';

const ContetFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0.5rem;
    background-color: var(--custom-blue);
    color: white;

    div {
        text-align: center;
    }
`;

const Footer = () => {



    return (
        <ContetFooter>
            <div className="col-4">
                <h3>Titulo de prueba</h3>

                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>

            <div className="col-4">
                <h3>Titulo de prueba</h3>

                <p>asdasdasdasdadadasd</p>
                <p>asdasdasdasdadadasd</p>
            </div>

            <div className="col-4">
                <h3>Términos u condiciones</h3>

                <p>asdasdasdasdasdasd</p>
                <p>asdasdasdasdadadasd</p>
            </div>
        </ContetFooter>
    );
}
 
export default Footer;