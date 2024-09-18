import { Pokemon } from './Pokemon/Pokemon';
import { useState } from 'react';
import { useRequestPokemonQueries } from '../../utils/api/hooks';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(20);
  const results = useRequestPokemonQueries({ offset });
  const isLoading = results.some((result) => result.isLoading);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  return (
    <div className='container'>
      <button className='text-2xl' onClick={() => setOffset(offset + 20)}>
        Load more
      </button>
      <div className='grid grid-cols-4 gap-3'>
        {pokemons.map((pokemon: any, index: number) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};
