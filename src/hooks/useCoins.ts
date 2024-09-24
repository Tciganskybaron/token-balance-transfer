import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { IResponseCoins } from '../interface';
import { useAccount } from 'wagmi';

const API_KEY = "2mW1719EGnQiDf2OjHZIjN4Ag6x"

const getData = (address: `0x${string}`, chain_id: number| undefined) => {
	return axios.get<IResponseCoins>(`https://api.chainbase.online/v1/account/tokens?chain_id=${chain_id}&limit=100&address=${address}`,{ headers: {'x-api-key': API_KEY} });
};


export function useCoins() {
  const account = useAccount();

  const { data, isError, isSuccess } = useQuery({
		queryKey: ['coins'],
		queryFn: () => getData(account.address as `0x${string}`, account.chainId ),
		select: data => data.data.data,
		enabled: !!account.isConnected,
	});

	useEffect(() => {
		if (isSuccess) console.log('Data fetched seccessfully');
	}, [isSuccess]);

	useEffect(() => {
		if (isError) console.log('Data fetched error');
	}, [isError]);

	return { data, isError, isSuccess }
}
