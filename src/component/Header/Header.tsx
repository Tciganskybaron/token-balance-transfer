import styles from './Header.module.css';
import { useAccount } from 'wagmi';
import { ConnectButton } from '..';
import { EthereumCard } from '../EthereumCard/EthereumCard';

export function Header() {
	const account = useAccount();

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Token Balance Transfer</div>
			<div className={styles['button-group']}>
				<ConnectButton />
				{!!account.isConnected && <EthereumCard />}
			</div>
		</header>
	);
}
