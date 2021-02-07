import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { ButtonProps } from './Button.types';
import { Theme } from '../../styles';

const { colors, spaces } = Theme;

/**
 * Button specification for main color and
 * states buttons percent.
 *
 * The *Percent unit are specified in decimal. For example 30% will be 0.3
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonSpecification: any = {
    primary: {
        color: colors.primary,
        activePercent: 0.03,
        focusPercent: 0.03,
        hoverPercent: 0.03,
    },
    secondary: {
        color: colors.secondary,
        activePercent: 0.01,
        focusPercent: 0.03,
        hoverPercent: 0.02,
        disabledPercent: 0.4,
    },
    success: {
        color: colors.tertiary,
        activePercent: 0.03,
        focusPercent: 0.03,
        hoverPercent: 0.05,
    },
    warning: {
        color: colors.warning,
        activePercent: 0.03,
        focusPercent: 0.03,
        hoverPercent: 0.05,
    },
};

/**
 * Get the button variants style
 *
 * The functions aims to avoid unnecessary boilerplate.
 *
 * @returns customStyle - object contains the style for all specified button variants
 */
const getVariantButtonTypeStyle = (props: ButtonProps) => {
    const {
        color,
        activePercent,
        focusPercent,
        hoverPercent,
        disabledPercent,
    } = buttonSpecification[props.variant];

    const customStyle = `
      background-color: ${buttonSpecification[props.variant].color};
      border-color: ${buttonSpecification[props.variant].color};
      &:active {
        background: ${darken(activePercent, color)};
        border-color: ${darken(activePercent, color)};
        transform: 'translateY(0.3rem)';
        outline: 0;
      }
      &:focus {
        background: ${lighten(focusPercent, color)};
        border-color: ${lighten(focusPercent, color)};
        boxShadow: 0 0 0 0.2rem ${lighten(0.3, color)};
        outline: 0;
      }
      &:hover {
        background: ${lighten(hoverPercent, color)};
        border-color: ${lighten(hoverPercent, color)};
      }
      &:disabled {
        cursor: 'not-allowed';
        opacity: ${disabledPercent || '0.32'};
        &:active: undefined;
        &:hover: undefined;
      }
  `;

    return customStyle;
};

const StyledButton = styled.button`
    align-items: center;
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 0 ${colors.fill};
    color: ${(props: ButtonProps) =>
        props.variant === 'secondary' ? colors.fillGray : colors.fillTertiary};
    cursor: pointer;
    display: inline-flex;
    font-size: ${(props) => (props.size === 'large' ? '2rem' : '1.4rem')};
    justify-content: center;
    line-height: 1;
    max-width: 100%;
    padding: ${(props: ButtonProps) =>
        props.size === 'small'
            ? `${spaces.xs} ${spaces.s}`
            : `${spaces.s} ${spaces.m}`};
    text-decoration: none;
    transition: 'all .3s cubic-bezier(0.35,0, 0.25, 1)';
    user-select: none;
    white-space: nowrap;
    ${(props) => getVariantButtonTypeStyle(props)}
`;

const StyledLinkButton = styled.button`
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${colors.fillBlue};
    cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
    display: flex;
    font-size: inherit;
    justify-content: center;
    margin: ${spaces.none};
    max-width: 100%;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
    text-decoration: none;
    transition: '.3s';
    user-select: none;
    white-space: nowrap;

    &:hover {
        color: ${colors.fillBlue};

        svg {
            fill: ${colors.fillBlue};
        }
    }

    &:focus {
        box-shadow: none;
        outline: 0;
    }

    &:focus,
    &:active {
        text-decoration: none;
    }
`;

export { StyledButton, StyledLinkButton };
