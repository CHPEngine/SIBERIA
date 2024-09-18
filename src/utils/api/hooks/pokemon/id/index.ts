import { useQueries } from 'react-query';
import { requestPokemon } from '../../../requests';

interface UseRequestPokemonParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset }: UseRequestPokemonParams) =>
  useQueries<any>(
    Array.from({ length: offset }).map((_, index) => {
      const pokemonId = index + 1;
      return {
        queryKey: ['pokemon', pokemonId],
        queryFn: () => requestPokemon({ params: { id: pokemonId } })
      };
    })
  );
