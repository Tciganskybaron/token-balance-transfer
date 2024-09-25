import cn from 'classnames';
import styles from './SendEthereum.module.css';
import { useState } from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { Input, Button, Bubble } from 'pixel-retroui';
import { validateAddress } from '../../helpers/validateAddress';
import { validateValue } from '../../helpers/validateValue';
import { ISendEthereumProps } from './SendEthereum.props';
import { getTransactionUrl } from '../../helpers/getTransactionUrl';

export function SendEthereum({ balance }: ISendEthereumProps) {
	const { data: hash, sendTransaction, isPending, isSuccess, isError, error: errorTransaction } = useSendTransaction();
	const account = useAccount();

	const [address, setAddress] = useState('');
	const [value, setValue] = useState('');
	const [error, setError] = useState<string | null>(null);

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
				<div className={styles.value}>
					<span>Value:</span>
					<div className={styles.balance}>
						<span>Balance:</span>
						<span>{balance}</span>
						<span
							onClick={() => setValue(balance)}
							className={cn(styles.max, {
								[styles.hidden]: value >= balance,
							})}
						>
							Max
						</span>
					</div>
				</div>
				<Input name="value" placeholder="0.05" value={value} onChange={e => setValue(e.target.value)} onClick={resetError} required type="number" />
				{error && (
					<Bubble direction="left" bg="#ef6995" textColor="#44573c" borderColor="#44573c" className={cn('p-1', styles.bubble)}>
						{error}
					</Bubble>
				)}
				<Button type="submit" disabled={isPending}>
					{isPending ? 'Sending...' : 'Transfer'}
				</Button>
				{isSuccess && <div>Transaction successful!</div>}
				{isError && <div>Error: {errorTransaction?.message}</div>}
			</div>
			{hash && (
				<div>
					Transaction Hash:{' '}
					<a target="_blank" className={styles.link} href={getTransactionUrl(account.chainId, hash)}>
						{hash}
					</a>
				</div>
			)}
		</form>
	);
}
