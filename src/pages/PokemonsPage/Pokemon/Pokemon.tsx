import React from 'react';

interface IPokemonProps {
  pokemon: any;
}

export const Pokemon: React.FC<IPokemonProps> = ({ pokemon }) => {
  return (
    <div className='flex justify-center flex-col rounded p-4 shadow w-60'>
      <img className='w-full h-50' src={pokemon?.sprites.front_default} alt='pokemon' />
      <h2 className='w-full text-left text-xl font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  );
};
