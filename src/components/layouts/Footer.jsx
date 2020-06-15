import React from 'react';

import styled from '@emotion/styled';

const ContetFooter = styled.footer`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
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
            <footer className="page-footer font-small special-color-dark pt-5 mt-5">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a href="true" className="btn-floating btn-fb mx-1 text-white">
                                <i className="fa fa-facebook-f"> </i>
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="true" className="btn-floating btn-tw mx-1 text-white">
                                <i className="fa fa-twitter"> </i>
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="true" className="btn-floating btn-gplus mx-1 text-white">
                                <i className="fa fa-google-plus"> </i>
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="true" className="btn-floating btn-li mx-1 text-white">
                                <i className="fa fa-linkedin"> </i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-copyright text-center py-3">bfood.com.pe
                    <a href="true" className="text-white"> Copyright &#169; 2020</a>
                </div>
            </footer>
        </ContetFooter>
    );
}
 
export default Footer;