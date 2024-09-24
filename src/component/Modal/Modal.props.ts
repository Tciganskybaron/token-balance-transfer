import React, { DialogHTMLAttributes, ReactNode } from 'react';

export interface IModalProps
  extends React.DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  openModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}
