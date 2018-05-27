import { Network } from '../../utils/';

export const getItems = async () => {
  const result = await Network.get('api/items');
  return result;
};
