import constants from './constants';

const initialState = {
  aanbiedingen: [],
  isLoading: false,
  error: false,
  errorMsg: '',
};

const aanbiedingen = (state = initialState, action = {}) => {
  const payload = action.payload;

  switch (action.type) {
    case constants.GET_AANBIEDINGEN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: 'Failed retrieving the aanbiedingen',
      };

    case constants.GET_AANBIEDINGEN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case constants.GET_AANBIEDINGEN_FULFILLED:
      return {
        ...state,
        aanbiedingen: payload,
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default aanbiedingen;
