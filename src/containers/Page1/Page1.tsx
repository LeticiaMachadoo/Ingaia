import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';

const Page1 = (Page1Props: RouteComponentProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <>
            <h3 id="info">
                {t('pages.page1')} {Page1Props.uri}
            </h3>
            <Card title="title" description="description" cover={<>imagem</>} />
        </>
    );
};

export default Page1;
