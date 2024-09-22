import { Pokemon } from './Pokemon/Pokemon';
import { useState } from 'react';
import { useRequestPokemonQueries } from '@utils/api';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(10);
  const { data, isLoading } = useRequestPokemonQueries({ offset });

  if (isLoading || !data) return null;

  const pokemons = data.data.results;
  return (
    <div className='container'>
      <button className='text-2xl' onClick={() => setOffset(offset + 10)}>
        + 10
      </button>
      <button className='text-2xl' onClick={() => setOffset(offset - 10)}>
        - 10
      </button>
      <div className='grid grid-cols-4 gap-3'>
        {pokemons.map((pokemon: any, index: number) => (
          <div key={index}>{pokemon.name}</div>
          // <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};
