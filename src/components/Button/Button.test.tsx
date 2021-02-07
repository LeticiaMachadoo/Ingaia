import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
    test('should render button', () => {
        const { container } = render(<Button>Button</Button>);
        const buttons = container.getElementsByTagName('button');

        expect(buttons).toHaveLength(1);
        expect(buttons[0]).toHaveTextContent('Button');
    });
    test('should render a disabled button', () => {
        const { container } = render(<Button disabled>Button</Button>);
        const buttons = container.getElementsByTagName('button');

        expect(buttons).toHaveLength(1);
        expect(buttons[0]).toHaveAttribute('disabled');
    });
    test('should call onClick', () => {
        const onClick = jest.fn();
        const { container } = render(<Button onClick={onClick}>Button</Button>);

        fireEvent.click(container.getElementsByTagName('button')[0]);
        expect(onClick).toHaveBeenCalled();
    });
    test("should not render 'variant' and 'size' as an HTML attribute", () => {
        const { container } = render(
            <Button variant="primary" size="large">
                Button
            </Button>
        );
        const button = container.getElementsByTagName('button')[0];
        expect(button).not.toHaveAttribute('variant');
        expect(button).not.toHaveAttribute('size');
    });
});
