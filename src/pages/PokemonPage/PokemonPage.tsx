import { useParams } from 'react-router-dom';
import { useRequestPokemonQuery } from '@utils/api';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

export const PokemonPage = () => {

  const [isPopup, setIsPopup] = useState(false);

  const params = useParams();
  const { mutate, data } = useRequestPokemonQuery({
    params: { id: +(params.pokemonId as string) },
    config: {
      staleTime: 5000,
    }
  });


  return (
      <div className='container'>
          <button onClick={() => mutate()}>FETCH</button>
          {data?.data.name}
      </div>
  );
};
