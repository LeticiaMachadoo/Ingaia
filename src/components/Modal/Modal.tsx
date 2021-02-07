import React from 'react';
import { Modal as ModalAnt } from 'antd';
import { ModalProps as ModalPropsAnt } from 'antd/lib/modal';

export interface ModalProps extends ModalPropsAnt {
    readonly children: React.ReactNode;
}

const Modal = (props: ModalProps): JSX.Element => {
    const { children } = props;
    return <ModalAnt {...props}>{children}</ModalAnt>;
};

Modal.defaultProps = {
    footer: null,
};

export default Modal;
