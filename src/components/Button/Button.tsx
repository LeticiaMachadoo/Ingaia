import React from 'react';
// eslint-disable-next-line import/named
import { StyledButton, StyledLinkButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
    const { children, disabled, onClick, size, variant, htmlType } = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return variant === 'link' ? (
        <StyledLinkButton disabled={disabled} onClick={handleClick}>
            {children}
        </StyledLinkButton>
    ) : (
        <StyledButton
            disabled={disabled}
            size={size}
            variant={variant}
            type={htmlType}
            onClick={handleClick}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    disabled: false,
};

export default Button;
