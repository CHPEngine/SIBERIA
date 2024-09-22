import { useQuery, useMutation } from 'react-query';
import { requestPokemon } from '@utils/api';

interface UseRequestPokemonParams {
  id: number;
}

export const useRequestPokemonQuery = ({ params, config }: RequestQueryParams<UseRequestPokemonParams>) =>
  useMutation(['pokemon', params.id], () => requestPokemon({ params }));
