import constants from './constants';

const initialState = {
  items: [],
  isLoading: false,
  error: false,
  errorMsg: '',
};

const items = (state = initialState, action = {}) => {
  const payload = action.payload;

  switch (action.type) {
    case constants.GET_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: 'Failed retrieving the items',
      };

    case constants.GET_ITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case constants.GET_ITEMS_FULFILLED:
      return {
        ...state,
        items: payload,
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default items;
