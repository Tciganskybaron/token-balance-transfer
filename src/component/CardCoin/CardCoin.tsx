import cn from 'classnames';
import styles from './CardCoin.module.css';
import { Card } from 'pixel-retroui';
import { ICardCoinProps } from './CardCoin.props';
import { Button } from 'pixel-retroui';

export function CardCoin({ balance, name, symbol, transferCoin }: ICardCoinProps) {
	return (
		<Card className={cn('p-4', styles.card)}>
			<h2 className={styles.title}>{name}</h2>
			<div className={styles['coin-transfer']}>
				<div>
					<span>{balance}</span> <span>{symbol}</span>
				</div>
				<Button onClick={transferCoin}>Transfer</Button>
			</div>
		</Card>
	);
}
