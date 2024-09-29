import { api } from '../../../instance';
import { AxiosRequestConfig } from 'axios';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonById = ({ params, config }: RequestPokemonParams) =>
  api.get<Pokemon>(`pokemon/${params.id}`, { ...config });
