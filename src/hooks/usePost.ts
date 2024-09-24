import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

const address = '0xA4Df2Fa0fAD5Ed7f69506CC6b2b56F0A271C054B'
const API_KEY = "2mW1719EGnQiDf2OjHZIjN4Ag6x"

const getData = () => {
	return axios.get(`https://api.chainbase.online/v1/account/tokens?chain_id=8453&limit=100&address=${address}`,{ headers: {'x-api-key': API_KEY} });
};

export function usePost(id: number) {
		const { data, isError, isSuccess } = useQuery({
		queryKey: ['balance'],
		queryFn: () => getData(),
		select: data => data.data,
		enabled: !!id,
	});

	useEffect(() => {
		if (isSuccess) console.log('Data fetched seccessfully');
	}, [isSuccess]);

	useEffect(() => {
		if (isError) console.log('Data fetched error');
	}, [isError]);

	return { data, isError, isSuccess }
}
