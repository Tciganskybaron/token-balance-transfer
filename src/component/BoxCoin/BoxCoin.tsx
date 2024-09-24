import styles from './BoxCoin.module.css';
import { useCoins } from '../../hooks';
import { parseUnits, formatUnits } from 'viem';
import { useState } from 'react';
import { Modal } from '..';

const isAuth = true;

export function BoxCoin() {
	const [openModal, setOpenModal] = useState(false);
	const [coinAddress, setCoinAddres] = useState('');

	const { data } = useCoins(isAuth);

	const transferCoin = (coinAddress: string) => {
		setOpenModal(true);
		setCoinAddres(coinAddress);
	};
	console.log('data', data);

	if (!data) return null;

	// Пример вашего баланса в шестнадцатеричном формате
	const hexBalance = '0x5c3b523c3a9a3980000'; // Например, это пришло из API

	// Шаг 1: Преобразуем шестнадцатеричное значение в BigInt
	const balance = BigInt(hexBalance);

	// Шаг 2: Преобразуем BigInt в читаемый формат, учитывая 18 десятичных знаков (типично для ERC-20 токенов)
	const formattedBalance = formatUnits(balance, 18);

	console.log('Formatted balance:', formattedBalance);

	return (
		<div className={styles['coin-box']}>
			Box Coin
			{data && (
				<div>
					{data.map(coin => {
						const balance = BigInt(coin.balance);
						const formattedBalance = formatUnits(balance, coin.decimals);

						return (
							<div key={coin.contract_address}>
								{coin.name} <strong>{formattedBalance}</strong>
								<button onClick={() => transferCoin(coin.contract_address)}>Transfer</button>
							</div>
						);
					})}
					{openModal && (
						<Modal openModal closeModal={() => setOpenModal(false)}>
							Modal
						</Modal>
					)}
				</div>
			)}
		</div>
	);
}
