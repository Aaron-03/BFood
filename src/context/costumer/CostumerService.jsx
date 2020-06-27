import React, { useReducer } from 'react';
import CostumerTypes from '../../types/CostumerTypes';
import CostumerContext from './CostumerContext';
import CostumerReducer from './CostumerReducer';
import ClientAxios from '../../config/ClientAxios';
const { ADD_COSTUMER, LGN_COSTUMER, UPD_COSTUMER } = CostumerTypes;
const CostumerService = (props) => {
  const initialState = {
    costumer: [],
    login: [],
  };
  const [state, dispatch] = useReducer(CostumerReducer, initialState);
  const addCostumer = async (costumer) => {
    let res = {
      ok: false,
      message: 'Error al registrar el usuario',
    };
    try {
      const response = await ClientAxios.post('/consumidor/add', costumer);
      if (response.status === 200) {
        dispatch({
          type: ADD_COSTUMER,
          payload: costumer,
        });
      }
      res = response;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    return res;
  };
  const lgnCostumer = async (login) => {
    let res = {
      ok: false,
      message: 'Error al loguearse',
    };

    try {
      const response = await ClientAxios.post('/constumer/login', login);
      if (response.status === 200) {
        dispatch({
          type: LGN_COSTUMER,
          payload: login,
        });
      }
      res = response;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    return res;
  };
  const updCostumer = async (costumer) => {
    let res = {
      ok: false,
      message: 'Error al registrar el usuario',
    };
    try {
      const response = await ClientAxios.post('/constumer/edit', costumer);
      if (response.status === 200) {
        dispatch({
          type: UPD_COSTUMER,
          ṕayload: costumer,
        });
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    return res;
  };
  return (
    <CostumerContext.Provider
      value={{
        addCostumer: addCostumer,
        lgnCostumer,
        updCostumer,
      }}
    >
      {props.children}
    </CostumerContext.Provider>
  );
};
export default CostumerService;
