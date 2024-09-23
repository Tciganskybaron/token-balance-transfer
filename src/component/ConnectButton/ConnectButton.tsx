import { useAccount, useConnect, useDisconnect } from 'wagmi';
import styles from './ConnectButton.module.css';

export function ConnectButton() {
	const { connectors, connect, status, error } = useConnect();
	return (
		<div className={styles['connet-box']}>
			<h2>Connect</h2>
			{connectors.map(connector => (
				<button key={connector.uid} onClick={() => connect({ connector })} type="button">
					{connector.name}
				</button>
			))}
			<div>{status}</div>
			<div>{error?.message}</div>
		</div>
	);
}
