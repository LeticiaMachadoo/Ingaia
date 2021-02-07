import React from 'react';
import { Card as CardAnt } from 'antd';

const { Meta } = CardAnt;

export interface CardProps {
    readonly width: number;
    readonly title: string;
    readonly description: string;
    readonly cover: React.ReactNode;
}

const Card = (props: CardProps): JSX.Element => {
    const { title, description, cover, width } = props;

    return (
        <CardAnt
            hoverable
            style={{ borderRadius: '.8rem', width }}
            cover={cover}
        >
            <Meta title={title} description={description} />
        </CardAnt>
    );
};

Card.defaultProps = {
    width: 240,
};

export default Card;
