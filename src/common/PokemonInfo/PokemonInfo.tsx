import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, PokemonStats, PokemonTypes } from '@common';
import { useRequestPokemonByIdQuery } from '@utils/api';
import { getPokemonId } from '@utils/helpers';

import styles from './PokemonInfo.module.css';

interface PokemonInfoProps {
  id: Pokemon['id'];
  onClose: () => void;
}

export const PokemonInfo: FC<PokemonInfoProps> = ({ id, onClose }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useRequestPokemonByIdQuery({ id });

  if (isLoading || !data) return null;

  const { data: pokemon } = data;

  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info_container}>
        <div className={styles.pokemon_info_title}>
          <div>
            <div className={styles.pokemon_name}>{pokemon.name}</div>
            <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
          </div>
          <div
            tabIndex={0}
            role='button'
            onKeyPress={(event) => {
              if (event.key === 'Enter') onClose();
            }}
            className={styles.close}
            onClick={() => {
              onClose();
            }}
          >
            x
          </div>
        </div>
        <div className={styles.pokemon_info_image}>
          <img src={pokemon.sprites.front_default ?? ''} alt='' />
        </div>
        <PokemonTypes types={pokemon.types} />

        <PokemonStats
          title='Stats'
          stats={pokemon.stats.map((item) => `${item.stat.name}: ${item.base_stat}`)}
        />
        <PokemonStats
          title='Abilities'
          stats={pokemon.abilities.map(({ ability }) => ability.name)}
        />

        <Button onClick={() => navigate(`/pokemon/${id}`)}>OPEN</Button>
      </div>
    </div>
  );
};
