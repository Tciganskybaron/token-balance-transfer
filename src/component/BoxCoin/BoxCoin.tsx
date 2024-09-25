import styles from './BoxCoin.module.css';
import { useCoins } from '../../hooks';
import { formatUnits } from 'viem';
import { useState } from 'react';
import { CardCoin, Popup, ProgressBar, SendERC20Token } from '..';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { ICoin } from '../../interface';

export function BoxCoin() {
	const [openPopup, setOpenPopup] = useState(false);
	const [coin, setCoin] = useState<ICoin | null>(null);
	const [visibleCoins] = useInfiniteScroll(20, 20);

	const { data, isLoading } = useCoins();

	const transferCoin = (coin: ICoin) => {
		setOpenPopup(true);
		setCoin(coin);
	};

	return (
		<div className={styles['coin-box']}>
			{isLoading && <ProgressBar />}
			{data && (
				<>
					{data.slice(0, visibleCoins).map(coin => {
						const balance = BigInt(coin.balance);
						const formattedBalance = formatUnits(balance, coin.decimals);

						return (
							<CardCoin key={coin.contract_address} balance={formattedBalance} name={coin.name} symbol={coin.symbol} transferCoin={() => transferCoin(coin)} />
						);
					})}
				</>
			)}
			{openPopup && coin && (
				<Popup open={openPopup} onClose={() => setOpenPopup(false)}>
					<SendERC20Token coin={coin} />
				</Popup>
			)}
		</div>
	);
}
