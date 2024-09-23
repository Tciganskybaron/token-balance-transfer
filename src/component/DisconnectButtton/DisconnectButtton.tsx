import { useAccount, useDisconnect } from 'wagmi';
import styles from './DisconnectButtton.module.css';

export function DisconnectButton() {
	const { disconnect } = useDisconnect();
	const account = useAccount();

	if (account.status !== 'connected') return null;
	return (
		<button className={styles.disconnect} type="button" onClick={() => disconnect()}>
			Disconnect
		</button>
	);
}
