import React from 'react';

import { Image } from 'react-bootstrap';

import Hamburger_img from '../../../assets/img/Products/burguer.jpg';
import Star_Empty from '../../../assets/img/Products/star.svg';

export default function Product() {
  return (
    <div>
      <span>Hamburgesa</span>
      <Image src={Hamburger_img} />
      <div>
        <h2>HAMBURGUESA 2X1</h2>
        <p>
          Hambueguesa hecha con la mejor carne y vegetales que lo conforman.
        </p>
        <Image src={Star_Empty} />
        <p>s/ 9.99</p>
      </div>
    </div>
  );
}
