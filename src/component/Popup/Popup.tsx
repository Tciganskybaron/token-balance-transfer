import { IPopupProps } from './Popup.props';
import { Popup as PopupUI } from 'pixel-retroui';

export function Popup({ open, onClose }: IPopupProps) {
	return (
		<PopupUI isOpen={open} onClose={() => onClose()}>
			Your popup content here
		</PopupUI>
	);
}
