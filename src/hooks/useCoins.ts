import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IResponseCoins } from '../interface';
import { useAccount } from 'wagmi';
import { API_CHAINBASE } from '../helpers/constant';

const API_KEY = import.meta.env.VITE_API_CHAINBASE_KEY;

const getData = (address: `0x${string}`, chain_id: number | undefined) => {
	return axios.get<IResponseCoins>(API_CHAINBASE, {
		params: {
			chain_id, 
			limit: 100,
			address,
		},
		headers: {
			'x-api-key': API_KEY,
		},
	});
};


export function useCoins() {
  const account = useAccount();

  const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['coins'],
		queryFn: () => getData(account.address as `0x${string}`, account.chainId ),
		select: data => data.data.data,
		enabled: !!account.isConnected,
	});

	return { data, isError, isSuccess, isLoading }
}
