import { BASE_URL, MAINET_URL } from './constant'

export const getTransactionUrl = (chainId: number | undefined, hesh: string): string | undefined => {

	switch (chainId){
		case 1:
		  return MAINET_URL + hesh
		case 8453:
			return BASE_URL + hesh 
		default:
		  return undefined
	}
}
