import { Network } from '../../utils/';

export const getAutomaten = async () => {
  const result = await Network.get('api/automaten');
  return result;
};
