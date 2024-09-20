import classnames from 'classnames';
import React from 'react';

import { PokemonCard } from '@common';
import { useRequestPokemonQueries} from '@utils/api';

import styles from './PokedexPage.module.css';

export const PokedexPage = () => {
  const [offset, setOffset] = React.useState(3);
  const [selectedPokemonId, setSelectedPokemonId] = React.useState(1);

  const results = useRequestPokemonQueries({ offset });
  const isLoading = results.some((result) => result.isLoading);


  if (isLoading || !results.length) return null;

  // @ts-ignore
  const pokemons = results.map((result) => result.data!.data);
  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonId === pokemon.id)!;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <PokemonCard pokemon={selectedPokemon} />
        <ul className={styles.list}>
          {pokemons.map((pokemon) => {
            const isActive = selectedPokemonId === pokemon.id;

            return (
              <li
                key={pokemon.id}
                role='option'
                aria-selected={isActive}
                className={classnames(styles.pokemon_item, {
                  [styles.pokemon_item_active]: isActive
                })}
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') setSelectedPokemonId(pokemon.id);
                }}
                onClick={() => setSelectedPokemonId(pokemon.id)}
              >
                <img
                  className={styles.pokemon_item_image}
                  src={pokemon.sprites.front_default ?? ''}
                  alt='pokemon'
                />{' '}
                {pokemon.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
