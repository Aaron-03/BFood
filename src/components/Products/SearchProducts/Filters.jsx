import React, { useContext } from 'react';
import { InputGroup } from 'react-bootstrap';
import LupaIcon from '../../../assets/img/General/search.svg';

import { FilterOfProducts } from '../../ui/Forms';
import {
  SearchProductField,
  SelectPrice,
  CustomCheckbox,
} from '../../ui/Fields';
import { Magnifier } from '../../ui/Images';
import ProductContext from '../../../context/products/ProductContext';
import VendorContext from '../../../context/vendors/VendorContext';

import productos from '../../../datos/productos.json';
import useCategoriesChecks from '../../../hooks/useCategoriesChecks';
import { useEffect } from 'react';
import { useState } from 'react';

const Filters = (props) => {

  const {
    searchByTerm,
    //searchCheckHamburger,
    getProductsByPage,
    searchByPrice,
    searchPrice,
    categories,
    products
  } = useContext(ProductContext);

  const { getProductsByVendor } = useContext(VendorContext);

  // const [ categoriesSelected, setCategoriesSelected ] = useState([]);

  const [ ListCategories, categoriesSelected ] = useCategoriesChecks(categories);

  const [ busqueda, setBusqueda ] = useState('');

  const handlerBusqueda = (e) => {

    const termVal = e.target.value;
    setBusqueda(termVal);
    searchByTerm(termVal);
  };

  const handlerPrice = (e) => {
    searchByPrice(Number(e.target.value));
  };

  useEffect(() => {

    if(busqueda.trim() === '') {
      getProductsByPage(5);
    }
    
  // eslint-disable-next-line
  }, [busqueda]);
  
  useEffect(() => {
    console.log(categoriesSelected);
  }, [categoriesSelected]);


  return (

    <FilterOfProducts className="col-2">
      <h5 className="text-center pt-5 mb-3">Busca lo mejor para ti:</h5>

      <form className="mb-2">
        <SearchProductField
          type="Text"
          placeholder="¿Qué deseas ahora?"
          className="ml-4 mb-4 pl-4"
          name="busqueda"
          value={busqueda}
          onChange={handlerBusqueda}
        />

        <Magnifier src={LupaIcon} />
      </form>

      <form className="mb-4">
        <span className="font-weight-bold ml-3">Ordenar por</span>

        <SelectPrice className="ml-4 w-50 p-1" onChange={handlerPrice}>
          <option value="0">Seleccione</option>
          <option value="1">Menor Precio</option>
          <option value="2">Mayor Precio</option>
        </SelectPrice>
      </form>

      <form>
        <span className="font-weight-bold ml-3">Categorías</span>

        <ListCategories />

        <span className="font-weight-bold ml-3">
          Principales establecimientos
        </span>

        <InputGroup className="ml-3 mt-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Bembos</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Pizza Hut</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>KFC</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Mediterraneo</span>
        </InputGroup>
      </form>
    </FilterOfProducts>
  );
};

export default Filters;
