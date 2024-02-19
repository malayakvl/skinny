import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import store from '../app/store';
import { Provider as ReduxProvider } from 'react-redux';

import MainLayout from '../components/layout/MainLayout';
import React from 'react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const Layout = (Component as any).Layout || MainLayout;

    return getLayout(
        <>
            <ReduxProvider store={store}>
                <MainLayout>
                    <Head>
                        <title>Payment App</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                              rel="stylesheet"
                              integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                              crossOrigin="anonymous"/>
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MainLayout>
            </ReduxProvider>
        </>
    );
}

export default MyApp;
