import { IPopupProps } from './Popup.props';
import { Popup as PopupUI } from 'pixel-retroui';

export function Popup({ open, onClose, children }: IPopupProps) {
	return (
		<PopupUI isOpen={open} onClose={() => onClose()}>
			{children}
		</PopupUI>
	);
}
