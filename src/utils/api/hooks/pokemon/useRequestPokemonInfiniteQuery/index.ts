import { useInfiniteQuery } from 'react-query';

import { requestPokemons } from '@utils/api';

const REQUEST_POKEMONS_LIMIT = 50;
export const useRequestPokemonInfiniteQuery = (settings?: any) =>
  useInfiniteQuery(
    'pokemon',
    ({ pageParam = 0 }) =>
      requestPokemons({
        params: { limit: REQUEST_POKEMONS_LIMIT, offset: pageParam },
        ...(settings?.config && { config: settings.config })
      }),
    {
      ...(settings?.options && settings.options),
      getNextPageParam: (lastPokemonsData, allPokemonsData) => {
        const pokemonsCount = allPokemonsData.length * REQUEST_POKEMONS_LIMIT;

        const hasNextPage = pokemonsCount < lastPokemonsData.data.count;
        if (hasNextPage) return pokemonsCount;
      }
    }
  );
