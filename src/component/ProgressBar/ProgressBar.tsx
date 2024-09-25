import styles from './ProgressBar.module.css';
import cn from 'classnames';
import { ProgressBar as ProgressBarUi } from 'pixel-retroui';
import { useEffect, useState } from 'react';

export function ProgressBar() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setProgress(prev => (prev >= 100 ? 0 : prev + 20));
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []); 

	return (
		<div className={styles.loader}>
			<ProgressBarUi size="lg" color="black" borderColor="black" className={cn('w-full')} progress={progress} />
		</div>
	);
}
