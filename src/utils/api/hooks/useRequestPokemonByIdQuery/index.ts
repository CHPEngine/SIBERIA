import { useQuery } from 'react-query';

import { requestPokemonById } from '@utils/api';

interface UseRequestPokemonQueryByIdParams {
    id: number;
}

export const useRequestPokemonByIdQuery = (
    params: RequestParams<UseRequestPokemonQueryByIdParams>,
    settings?: any
) =>
    useQuery(
        ['pokemon', params.id],
        () => requestPokemonById({ params, ...(settings?.config && { config: settings.config }) }),
        settings?.options && settings.options
    );