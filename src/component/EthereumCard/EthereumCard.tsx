import { Card } from 'pixel-retroui';
import styles from './EthereumCard.module.css';
import cn from 'classnames';
import { Button } from 'pixel-retroui';
import { useAccount, useBalance } from 'wagmi';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';

export function EthereumCard() {
	const account = useAccount();

	const [openPopup, setOpenPopup] = useState(false);

	const result = useBalance({
		address: account.address,
		unit: 'ether',
	});

	console.log('result =>', result);

	return (
		<Card className={cn('p-4', styles.card)}>
			<h2 className={styles.title}>Ethereum</h2>
			<div className={styles.transfer}>
				<span>{result.data?.formatted}</span> <strong>ETH</strong>
				<Button onClick={() => setOpenPopup(true)}>Transfer</Button>
			</div>
			{openPopup && <Popup open={openPopup} onClose={() => setOpenPopup(false)} />}
		</Card>
	);
}
