import { GET_WORLDDATA, GET_COUNTRYDATA, DATA_LOADING } from "../actions/types";

const initialState = {
  countryCases: [],
  worldCases: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORLDDATA:
      return {
        ...state,
        worldCases: action.payload,
        loading: false,
      };
    case GET_COUNTRYDATA:
      return {
        ...state,
        countryCases: action.payload,
        loading: false,
      };

    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
