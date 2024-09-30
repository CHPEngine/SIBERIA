import { useQuery } from 'react-query';
import {requestEvolutionChain} from "@utils/api";

interface UseRequestEvolutionChainQueryParams {
    id: Pokemon['id'];
}
export const useRequestEvolutionChainQuery = (
    params: RequestParams<UseRequestEvolutionChainQueryParams>,
    settings?: any
) =>
    useQuery(
        ['evolution-chain', params.id],
        () => requestEvolutionChain({ params, ...(settings?.config && { config: settings.config }) }),
        settings?.options && settings.options
    );