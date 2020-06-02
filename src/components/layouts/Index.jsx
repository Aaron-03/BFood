import React, { Fragment, useState } from 'react';

import styled from '@emotion/styled';

import { FormGroup } from 'react-bootstrap';

import { BtnSendData } from '../../components/ui/Buttons';
import { ImageSvg } from '../../components/ui/Images';

import searchImg from '../../assets/img/General/search.svg';

import dessertImg from '../../assets/img/General/dessert.svg';
import donutImg from '../../assets/img/General/donut.svg';
import drinkImg from '../../assets/img/General/drink.svg';
import fastImg from '../../assets/img/General/fast-food.svg';
import hotImg from '../../assets/img/General/hot-dog.svg';
import ListVendors from '../vendors/ListVendors';

const ContainerBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30rem;
  min-width: 25rem;
  background-color: rgba(0, 0, 0, 0.25);

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background: white;
    text-align: center;
    padding: 0.5rem;
    border: 2px solid dimgray;
  }

  > div {
    height: 20rem;
  }

  #searchId {
    outline-style: none !important;
    border: none;
  }

  #textHeader {
    font-size: 16pt;
    font-weight: bold;
    letter-spacing: 0.4rem;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: white;
  }
`;

const ContainerImages = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    position: absolute;
    opacity: 0.7;
  }

  img:nth-of-type(1) {
    top: 2%;
    left: 14%;
  }

  img:nth-of-type(2) {
    bottom: -12%;
    left: 22%;
  }

  img:nth-of-type(3) {
    top: -20%;
    left: 40%;
  }

  img:nth-of-type(4) {
    top: -15%;
    left: 60%;
  }

  img:nth-of-type(5) {
    top: 25%;
    right: 12%;
  }
`;

const ContentImg = styled.div`
  /* position: absolute; */
  width: 2rem;
  height: 2rem;
  right: 1rem;
  /* top: 1rem; */
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 14;
  border-radius: 0.5rem;
  outline-style: none;
  background-color: var(--custom-blue);
  color: var(--custom-white);
  border: 3px solid black;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  option {
    border-radius: 2rem;
  }
`;

const ContainerElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Index = () => {
  const [error, setError] = useState(false);

  const [search, setSearch] = useState({
    term: '',
    option: 1,
  });

  const { term, option } = search;

    const handleChangeSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }


    return (
        <Fragment>
            <ContainerBackground className="position-relative">
                <ContainerImages>
                    <ImageSvg
                        customWidth="8rem"
                        customHeight="8rem"
                        src={donutImg}
                    />

                    <ImageSvg
                        customWidth="8rem"
                        customHeight="8rem"
                        src={drinkImg}
                    />

                    <ImageSvg
                        customWidth="8rem"
                        customHeight="8rem"
                        src={hotImg}
                    />

                    <ImageSvg
                        customWidth="8rem"
                        customHeight="8rem"
                        src={fastImg}
                    />

                    <ImageSvg
                        customWidth="8rem"
                        customHeight="8rem"
                        src={dessertImg}
                    />
                </ContainerImages>

                <ContainerElements className="col-10">
                    <div className="w-100 text-center text-white mb-5">
                        <h1 id="textHeader">BUSCA BEBIDAS, COMIDAS O TUS RESTAURANTES FAVORITOS</h1>
                    </div>

                    <div className="w-100">
                        <form
                            className="col-12 m-auto"
                        >
                            <FormGroup className="search col-8 mb-3 mx-auto">
                                <input
                                    id="searchId"
                                    type="text"
                                    name="term"
                                    value={term}
                                    onChange={handleChangeSearch}
                                    className="text-left col-11"
                                    placeholder="¿Qué es lo que deseas ahora?"
                                />

                                <ContentImg className="">
                                    <ImageSvg
                                        customWidth="100%"
                                        customHeight="100%"
                                        src={searchImg}
                                    />
                                </ContentImg>
                            </FormGroup>

                            <FormGroup className="row col-6 justify-content-around align-items-center m-auto p-2">

                                <Select
                                    name="option"
                                    value={option}
                                    onChange={handleChangeSearch}
                                >
                                    <option value="1">COMIDAS Y BEBIDAS</option>
                                    <option value="2">RESTAURANTES</option>
                                </Select>

                                <BtnSendData
                                    bgColor="#44B055"
                                >BUSCAR</BtnSendData>
                            </FormGroup>
                        </form>
                    </div>
                </ContainerElements>
            </ContainerBackground>

            <ListVendors />
        </Fragment>
    );
}
 
export default Index;
