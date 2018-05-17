import constants from './constants';
import { getAanbiedingen } from '../service/aanbiedingService';

export const allAanbiedingen = () => {
  return {
    type: constants.GET_AANBIEDINGEN,
    payload: getAanbiedingen(),
  };
};
