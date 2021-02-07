import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from '@reach/router';

const Page2 = (PagesProps: RouteComponentProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <h3 id="info">
            {t('pages.page2')} {PagesProps.uri}
        </h3>
    );
};

export default Page2;
