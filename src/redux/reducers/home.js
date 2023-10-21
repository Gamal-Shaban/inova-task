import initialStates from '../storeInitialState';
import {HOME_DATA, HOME_LOADING} from '../actions/types';

export default (state = initialStates.home, action) => {
  switch (action.type) {
    case HOME_LOADING:
      return {...state, loading: action?.payload?.loading};
    case HOME_DATA:
      return {
        ...state,
        homeData: [
          {
            title: 'Cost Effective',
            data: action?.payload?.data.costEffective,
          },
          {
            title: 'Bit Pricer',
            data: action?.payload?.data.bitPrice,
          },
          {
            title: 'Bi Spender',
            data: action?.payload?.data.biSpende,
          },
        ],
      };

    default:
      return state;
  }
};
