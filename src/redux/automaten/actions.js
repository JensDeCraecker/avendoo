import constants from './constants';
import { getAutomaten } from '../service/automatenService';

export const allAutomaten = () => {
  return {
    type: constants.GET_AUTOMATEN,
    payload: getAutomaten(),
  };
};
