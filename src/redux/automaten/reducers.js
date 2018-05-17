import constants from './constants';

const initialState = {
  automaten: [],
  isLoading: false,
  error: false,
  errorMsg: '',
};

const automaten = (state = initialState, action = {}) => {
  const payload = action.payload;

  switch (action.type) {
    case constants.GET_AUTOMATEN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: 'Failed retrieving the automaten',
      };

    case constants.GET_AUTOMATEN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case constants.GET_AUTOMATEN_FULFILLED:
      return {
        ...state,
        automaten: payload,
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default automaten;
