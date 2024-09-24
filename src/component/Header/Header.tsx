import { ConnectButton } from '..';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Token Balance Transfer</div>
			<div className={styles['button-group']}>
				<ConnectButton />
			</div>
		</header>
	);
}
