import { FC } from 'react';

import { PokemonEvolutionChainItem } from '@common/pokemon';
import { useRequestEvolutionChainQuery } from '@utils/api';
import { generatePokemonChain } from '@utils/helpers';

import styles from './PokemonEvolutionChain.module.css';

interface PokemonEvolutionChainProps {
  chainId: number;
  pokemonName: Pokemon['name'];
}

export const PokemonEvolutionChain: FC<PokemonEvolutionChainProps> = ({ chainId, pokemonName }) => {
  const { data: evolutionChainData, isLoading: evolutionChainLoading } =
    useRequestEvolutionChainQuery({
      id: chainId
    });
  const isEvolutionChainData = !!evolutionChainData && !evolutionChainLoading;
  if (!isEvolutionChainData) return null;
  const evolutionChain = evolutionChainData.data.chain;
  const pokemonChain = generatePokemonChain(pokemonName, evolutionChain);
  return (
    <div className={styles.container}>
      {!!pokemonChain.prev && (
        <>
          <div className='title'>Previous evolution</div>
          <div className={styles.evolutions_container}>
            <PokemonEvolutionChainItem name={pokemonChain.prev.species.name} />{' '}
          </div>
        </>
      )}
      {!!pokemonChain.next.length && (
        <>
          <div className='title'>Next evolution(s)</div>
          <div className={styles.evolutions_container}>
            {pokemonChain.next.map((evolution: any) => (
              <PokemonEvolutionChainItem
                key={evolution.species.name}
                name={evolution.species.name}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
