import constants from './constants';
import { getItems } from '../service/itemService';

export const allItems = () => {
  return {
    type: constants.GET_ITEMS,
    payload: getItems(),
  };
};
