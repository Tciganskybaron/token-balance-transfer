// import styles from './Header.module.css';
import { Card } from 'pixel-retroui';
import { ICardCoin } from './CardCoin.props';
import styles from './CardCoin.module.css';
import cn from 'classnames';
import { Button } from 'pixel-retroui';

export function CardCoin({ balance, name, symbol, transferCoin }: ICardCoin) {
	return (
		<Card className={cn('p-4', styles.card)}>
			<h2>{name}</h2>
			<div className={styles['coin-transfer']}>
				<div>
					<span>{balance}</span> <span>{symbol}</span>
				</div>
				<Button onClick={transferCoin}>Transfer</Button>
			</div>
		</Card>
	);
}
