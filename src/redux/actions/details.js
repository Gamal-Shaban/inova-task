import {API} from '../../services';
import {DETAILS_DATA, DETAILS_LOADING} from './types';

export const isLoading = loading => ({
  type: DETAILS_LOADING,
  payload: {
    loading,
  },
});
export const fetchDetails = id => {
  return dispatch => {
    dispatch(isLoading(true));
    return API.get(`${id}`)
      .then(res => {
        dispatch({
          type: DETAILS_DATA,
          payload: {
            data: res?.data,
          },
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(isLoading(false));
      });
  };
};
