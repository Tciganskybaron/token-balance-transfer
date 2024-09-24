import { Card } from 'pixel-retroui';
import styles from './EthereumCard.module.css';
import cn from 'classnames';
import { Button } from 'pixel-retroui';
import { useAccount, useBalance } from 'wagmi';

export function EthereumCard() {
	const account = useAccount();

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
				<Button>Transfer</Button>
			</div>
		</Card>
	);
}
