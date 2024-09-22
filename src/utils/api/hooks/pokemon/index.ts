import { useQueries, useQuery } from 'react-query';
import { requestPokemon, requestPokemons } from '@utils/api';

interface UseRequestPokemonsParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset }: UseRequestPokemonsParams) =>
  // useQueries<any>(
  //     Array.from({ length: offset }).map((_, index) => {
  //         const pokemonId = index + 1;
  //         return {
  //             queryKey: ['pokemon', pokemonId],
  //             queryFn: () => requestPokemon({ params: { id: pokemonId } })
  //         };
  //     })
  // );
  useQuery(['pokemon', offset], () => requestPokemons({ params: { offset, limit: 10 } }), {
    keepPreviousData: true
  });
