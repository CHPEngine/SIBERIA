import { useQuery } from 'react-query';
import { requestPokemonSpecies } from '@utils/api';

interface UseRequestPokemonSpeciesQueryParams {
    id: Pokemon['id'];
}
export const useRequestPokemonSpeciesQuery = (
    params: RequestParams<UseRequestPokemonSpeciesQueryParams>,
    settings?: any
) =>
    useQuery(
        ['pokemon-species', params.id],
        () => requestPokemonSpecies({ params, ...(settings?.config && { config: settings.config }) }),
        settings?.options && settings.options
    );