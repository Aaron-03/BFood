import CostumerContext from '../../types/CostumerTypes';
const { ADD_COSTUMER, LGN_COSTUMER } = CostumerContext;

export default (state, action) => {
  switch (action.type) {
    case ADD_COSTUMER:
      return {
        costumer: [...state.costumer, action.payload],
      };
    case LGN_COSTUMER:
      localStorage.setItem("token-auth-customer", JSON.stringify(action.payload.data));
      return {
        ...state,
        authenticated: action.payload.data,
        loginCostumer: action.payload.data
      };
    default:
      return state;
  }
};
