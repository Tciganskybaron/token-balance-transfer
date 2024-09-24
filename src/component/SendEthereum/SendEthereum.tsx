import { useState } from 'react';
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import styles from './SendEthereum.module.css';
import { Input, Button, Bubble } from 'pixel-retroui';
import cn from 'classnames';

export function SendEthereum() {
	const { data: hash, sendTransaction } = useSendTransaction();

	const [address, setAddress] = useState('');
	const [value, setValue] = useState('');
	const [error, setError] = useState<string | null>(null);

	const validateAddress = (addr: string) => {
		return /^0x[a-fA-F0-9]{40}$/.test(addr);
	};

	const validateValue = (val: string) => {
		return !isNaN(Number(val)) && Number(val) > 0;
	};

	const resetError = () => {
		setError(null);
	};

	async function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!validateAddress(address)) {
			setError('Invalid Ethereum address.');
			return;
		}
		if (!validateValue(value)) {
			setError('Amount must be a positive number.');
			return;
		}

		setError(null);

		sendTransaction({ to: address as `0x${string}`, value: parseEther(value) });
	}

	return (
		<form className={styles.form} onSubmit={submit}>
			<div className={styles.input}>
				<span>Address:</span>
				<Input name="address" placeholder="0xA0Cf…251e" value={address} onChange={e => setAddress(e.target.value)} onClick={resetError} required />
				<span>Value:</span>
				<Input name="value" placeholder="0.05" value={value} onChange={e => setValue(e.target.value)} onClick={resetError} required type="number" />
				{error && (
					<Bubble direction="left" bg="#ef6995" textColor="#44573c" borderColor="#44573c" className={cn('p-1', styles.bubble)}>
						{error}
					</Bubble>
				)}
				<Button className={styles.button} bg="darkgray" shadow="gray" type="submit">
					Send
				</Button>
			</div>
			{hash && <div>Transaction Hash: {hash}</div>}
		</form>
	);
}
