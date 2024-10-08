import { FC } from 'react';

import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  title: string;
  stats: string[];
}

export const PokemonStats: FC<PokemonStatsProps> = ({ title, stats }) => (
  <div>
    <div className={styles.title}>{title}</div>
    <ul className={styles.stats}>
      {stats.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);
