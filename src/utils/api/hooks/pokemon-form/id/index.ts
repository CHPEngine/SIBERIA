import { QueryObserverOptions, useQuery } from 'react-query';
import { requestPokemonForm } from '../../../requests';

interface UseRequestPokemonFromQueryParams {
  id: number;
}

interface RequestQueryParams<T> {
  params: T;
  config: QueryObserverOptions<any, any, any, any, any>;
}

export const useRequestPokemonFormQuery = ({
  params,
  config
}: RequestQueryParams<UseRequestPokemonFromQueryParams>) =>
  useQuery(['pokemon-form', params.id], () => requestPokemonForm({ params }), config);
