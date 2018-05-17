import { Network } from '../../utils/';

export const getAanbiedingen = async () => {
  const result = await Network.get('api/aanbiedingen');
  return result;
};
