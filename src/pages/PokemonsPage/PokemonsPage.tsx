import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useRequestPokemonInfiniteQuery } from '@utils/api';
import { getPokemonId } from '@utils/helpers';

import styles from './PokemonsPage.module.css';
import {PokemonInfo} from "@common";


export const PokemonsPage: React.FC = () => {
    const [pokemonId, setPokemonId] = React.useState<Pokemon['id'] | null>(null);
    const { ref, inView } = useInView();
    const { data, fetchNextPage, isLoading, hasNextPage } = useRequestPokemonInfiniteQuery();

    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, data]);

    if (isLoading || !data) return null;

    const pokemons = data.pages.reduce(
        (pokemons: NamedAPIResource[], { data }) => [...pokemons, ...data.results],
        []
    );

    return (
        <div className={styles.page}>
            <div className={styles.pokemons_container}>
                {pokemons.map((pokemon, index) => {
                    const id = index + 1;

                    return (
                        <>
                            <div
                                key={id}
                                className={styles.pokemon_container}
                                role='button'
                                tabIndex={0}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') setPokemonId(id);
                                }}
                                onClick={() => setPokemonId(id)}
                            >
                                <div key={index} className={styles.pokemon}>
                                    <div className={styles.pokemon_name}>{pokemon.name}</div>
                                    <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
                                </div>
                            </div>
                            {pokemonId === id && <PokemonInfo id={id} onClose={() => setPokemonId(null)} />}
                        </>
                    );
                })}
                <div ref={ref} />
            </div>
        </div>
    );
};