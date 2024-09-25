import { useState } from 'react';
import cn from 'classnames';
import styles from './EthereumCard.module.css';
import { formatUnits } from 'viem';
import { useAccount, useBalance } from 'wagmi';
import { Card } from 'pixel-retroui';
import { Button } from 'pixel-retroui';
import { Popup } from '../Popup/Popup';
import { SendEthereum } from '..';

export function EthereumCard() {
	const account = useAccount();

	const [openPopup, setOpenPopup] = useState(false);

	const { data: balanceData } = useBalance({
		address: account.address,
		unit: 'wei',
	});

	const balance = balanceData ? formatUnits(balanceData.value, 18) : '0';

	return (
		<Card className={cn('p-4', styles.card)}>
			<h2 className={styles.title}>Ethereum</h2>
			<div className={styles.transfer}>
				<span>{balance}</span> <strong>ETH</strong>
				<Button onClick={() => setOpenPopup(true)}>Transfer</Button>
			</div>
			{openPopup && (
				<Popup open={openPopup} onClose={() => setOpenPopup(false)}>
					<SendEthereum balance={balance} />
				</Popup>
			)}
		</Card>
	);
}
