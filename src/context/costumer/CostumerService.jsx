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
      const response = await ClientAxios.post(
        '/users/registrar-cuenta',
        costumer
      );
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
    localStorage.setItem('login', res.data);
    return res;
  };
  const lgnCostumer = async (login) => {
    let res = {
      ok: false,
      message: 'Error al loguearse',
    };

    try {
      const response = await ClientAxios.post('/users/iniciar-sesion', login);
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
      const response = await ClientAxios.put('/consumidor/edit', costumer);
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
        login: state.login,
      }}
    >
      {props.children}
    </CostumerContext.Provider>
  );
};
export default CostumerService;
