import axios from 'axios';
import { GET_WORLDDATA, GET_COUNTRYDATA, DATA_LOADING } from './types';

export const getWorldData = () => dispatch => {
  dispatch(setDataLoading());
  axios
    .get('https://corona.lmao.ninja/all')
    .then(res =>
      dispatch({
        type: GET_WORLDDATA,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err))
};

export const getCountryData = () => dispatch => {
  dispatch(setDataLoading());
  axios
    .get('https://corona.lmao.ninja/countries')
    .then(res =>
      dispatch({
        type: GET_COUNTRYDATA,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err))
};


export const setDataLoading = () => {
  return {
    type: DATA_LOADING
  };
};
