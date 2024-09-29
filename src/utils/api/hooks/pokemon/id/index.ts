import { useMutation } from 'react-query';
import { requestPokemonById} from '@utils/api';

interface UseRequestPokemonParams {
  id: number;
}

export const useRequestPokemonQuery = ({ params}: RequestQueryParams<UseRequestPokemonParams>) =>
  useMutation(['pokemon', params.id], () => requestPokemonById({ params }));
