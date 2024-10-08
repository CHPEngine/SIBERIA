import { FC } from 'react';

import { PokemonType } from '@common/pokemon';

import styles from './PokemonTypes.module.css';

interface PokemonTypesProps {
  types: PokemonType[];
}

export const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => (
  <div className={styles.types}>
    {types.map(({ type }) => (
      <PokemonType type={type} />
    ))}
  </div>
);
