import { useEffect, useRef } from 'react';
import { IModalProps } from './Modal.props';

export function Modal({ openModal, closeModal, children }: IModalProps) {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (openModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [openModal]);

	if (!openModal) return null;

	return (
		<dialog ref={ref} onCancel={closeModal}>
			{children}
			<button onClick={closeModal}>Close</button>
		</dialog>
	);
}
