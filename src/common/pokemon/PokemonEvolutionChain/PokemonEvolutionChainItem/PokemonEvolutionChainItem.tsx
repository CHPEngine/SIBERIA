import classnames from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonTypes } from '@common/pokemon/PokemonTypes/PokemonTypes';
import { useRequestPokemonByNameQuery } from '@utils/api';

import styles from './PokemonEvolutionChainItem.module.css';

interface PokemonEvolutionChainItemProps {
  name: Pokemon['name'];
}

export const PokemonEvolutionChainItem: FC<PokemonEvolutionChainItemProps> = ({ name }) => {
  const navigate = useNavigate();
  const { data: pokemonByNameData, isLoading: pokemonByNameLoading } = useRequestPokemonByNameQuery(
    {
      name
    }
  );
  const isPokemonByNameData = !!pokemonByNameData && !pokemonByNameLoading;
  if (!isPokemonByNameData) return null;
  const pokemon = pokemonByNameData.data;
  return (
    <div
      className={classnames(styles.evolution)}
      role='button'
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.key === 'Enter') return navigate(`/pokemon/${pokemon.id}`);
      }}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div className={styles.image_container}>
        <img src={pokemon.sprites.front_default ?? ''} alt='' />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <PokemonTypes types={pokemon.types} />
      </div>
    </div>
  );
};
