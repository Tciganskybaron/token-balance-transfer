import { ReactNode } from 'react';

export interface IPopupProps{
   open: boolean,
	 onClose: () => void,
	 children: ReactNode,
}
