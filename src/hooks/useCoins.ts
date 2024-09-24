import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { IResponseCoins } from '../interface';

const address = '0xA4Df2Fa0fAD5Ed7f69506CC6b2b56F0A271C054B'
const API_KEY = "2mW1719EGnQiDf2OjHZIjN4Ag6x"

const getData = () => {
	return axios.get<IResponseCoins>(`https://api.chainbase.online/v1/account/tokens?chain_id=8453&limit=100&address=${address}`,{ headers: {'x-api-key': API_KEY} });
};


export function useCoins(isEnabled: boolean) {
		const { data, isError, isSuccess } = useQuery({
		queryKey: ['posts'],
		queryFn: getData,
		select: data => data.data.data,
		enabled: isEnabled,
	});

	useEffect(() => {
		if (isSuccess) console.log('Data fetched seccessfully');
	}, [isSuccess]);

	useEffect(() => {
		if (isError) console.log('Data fetched error');
	}, [isError]);

	return { data, isError, isSuccess }
}
