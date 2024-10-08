import { useQuery } from 'react-query';

import { requestPokemonByName } from '@utils/api';

interface UseRequestPokemonQueryByNameParams {
    name: string;
}
export const useRequestPokemonByNameQuery = (
    params: RequestParams<UseRequestPokemonQueryByNameParams>,
    settings?: any
) =>
    useQuery(
        ['pokemon', params.name],
        () => requestPokemonByName({ params, ...(settings?.config && { config: settings.config }) }),
        settings?.options && settings.options
    );