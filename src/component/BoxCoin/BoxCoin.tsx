import styles from './BoxCoin.module.css';
import { useCoins } from '../../hooks';
import { parseUnits, formatUnits } from 'viem';
import { useState } from 'react';
import { CardCoin, Modal } from '..';
import { useAccount } from 'wagmi';

export function BoxCoin() {
	const [openModal, setOpenModal] = useState(false);
	const [coinAddress, setCoinAddres] = useState('');

	const { data } = useCoins();

	const transferCoin = (coinAddress: string) => {
		setOpenModal(true);
		setCoinAddres(coinAddress);
	};
	if (!data) return null;

	console.log('BoxCoin', openModal, coinAddress);

	return (
		<div className={styles['coin-box']}>
			{data && (
				<>
					{data.map(coin => {
						const balance = BigInt(coin.balance);
						const formattedBalance = formatUnits(balance, coin.decimals);

						return (
							<CardCoin key={coin.contract_address} balance={formattedBalance} name={coin.name} symbol={coin.symbol} transferCoin={() => transferCoin(coin.contract_address)} />
						);
					})}
				</>
			)}
		</div>
	);
}
