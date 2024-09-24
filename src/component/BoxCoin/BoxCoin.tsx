import styles from './BoxCoin.module.css';
import { useCoins } from '../../hooks';
import { formatUnits } from 'viem';
import { useState } from 'react';
import { CardCoin, Popup } from '..';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'; // Импортируем хук

export function BoxCoin() {
	const [openPopup, setOpenPopup] = useState(false);
	const [coinAddress, setCoinAddres] = useState('');
	const [visibleCoins] = useInfiniteScroll(20, 20); // Используем хук

	const { data } = useCoins();

	const transferCoin = (coinAddress: string) => {
		setOpenPopup(true);
		setCoinAddres(coinAddress);
	};

	if (!data) return null;

	console.log('BoxCoin', openPopup, coinAddress);

	return (
		<div className={styles['coin-box']}>
			{data && (
				<>
					{data.slice(0, visibleCoins).map(coin => {
						const balance = BigInt(coin.balance);
						const formattedBalance = formatUnits(balance, coin.decimals);

						return (
							<CardCoin key={coin.contract_address} balance={formattedBalance} name={coin.name} symbol={coin.symbol} transferCoin={() => transferCoin(coin.contract_address)} />
						);
					})}
				</>
			)}
			{openPopup && <Popup open={openPopup} onClose={() => setOpenPopup(false)} />}
		</div>
	);
}
