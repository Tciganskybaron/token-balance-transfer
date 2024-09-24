import { useAccount, useConnect, useDisconnect } from 'wagmi';
import styles from './ConnectButton.module.css';
import { Button } from 'pixel-retroui';
import { useState } from 'react';

export function ConnectButton() {
	const { connectors, connect, status, error } = useConnect();

	const account = useAccount();

	const [openConnector, setOpenConnector] = useState(false);

	const { disconnect } = useDisconnect();
	return (
		<div className={styles['connet-box']}>
			{account.isConnected ? (
				<Button
					type="button"
					onClick={() => {
						disconnect();
						setOpenConnector(false);
					}}
					className={styles['disconnect-button']}
				>
					Disconnect: {account.address}
				</Button>
			) : openConnector ? (
				connectors.map(connector => (
					<Button key={connector.uid} onClick={() => connect({ connector })} type="button">
						{connector.name}
					</Button>
				))
			) : (
				<Button type="button" onClick={() => setOpenConnector(true)}>
					Connected
				</Button>
			)}
		</div>
	);
}
