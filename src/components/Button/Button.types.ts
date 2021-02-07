export type ButtonType =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'link';
type ButtonSize = 'small' | 'medium' | 'large';
type HtmlType = 'submit' | 'button' | 'reset' | undefined;

export interface ButtonProps {
    /** Button variant types. */
    readonly variant: ButtonType;
    /** Button size types. */
    readonly size?: ButtonSize;
    /** Button enabled or disabled. */
    readonly disabled?: boolean;
    /** Button content. */
    readonly children?: React.ReactNode;
    /** Button action when clicked. */
    readonly onClick?: () => void;
    /** Html buttom type */
    readonly htmlType?: HtmlType;
}
