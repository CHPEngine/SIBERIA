import { useQuery } from 'react-query';
import { requestEvolutionChain } from '@utils/api';

interface UseRequestEvolutionChainParams {
  id: number;
}
export const useRequestEvolutionChainQuery = ({
  params,
}: any) =>
  useQuery(['evolution-chain', params.id], () => requestEvolutionChain({ params }));
