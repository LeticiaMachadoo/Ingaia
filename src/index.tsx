import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { LoadingOutlined } from '@ant-design/icons';
import App from './containers/App/App';
import './configs/I18n';

ReactDOM.render(
    <Suspense fallback={<LoadingOutlined />}>
        <StrictMode>
            <App />
        </StrictMode>
    </Suspense>,
    document.getElementById('root')
);
