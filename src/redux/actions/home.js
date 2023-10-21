import {API} from '../../services';
import {HOME_DATA, HOME_LOADING} from './types';

export const isLoading = loading => ({
  type: HOME_LOADING,
  payload: {
    loading,
  },
});
export const homeData = data => ({
  type: HOME_DATA,
  payload: {
    data,
  },
});
export const fetchHomeData = input => {
  return dispatch => {
    dispatch(isLoading(true));
    const term = input ? `&term=${input}` : '';
    return API.get(
      `search?Location=san jose&Limit=50&latitude=37.295848&longitude=-121.9808997${term}`,
    )
      .then(res => {
        const data = res?.data?.businesses;
        const costEffective = data.filter(i => i?.price === '$');
        const bitPrice = data.filter(i => i?.price === '$$');
        const biSpende = data.filter(i => i?.price === '$');
        dispatch(homeData({costEffective, bitPrice, biSpende}));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(isLoading(false));
      });
  };
};
