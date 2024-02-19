import Head from 'next/head';
import FullLayout from '../components/layout/FullLayout';
// import { getSession } from 'next-auth/client';
import Main from '../components/main/index';

export default function Home() {
    return (
        <div className="main-bg container xl:max-w-[1400px] mx-auto">
            <Head>
                <title>Skinny App</title>
                <meta name="description" content="Skinny App" />
            </Head>

            <div className="main-layout">
                <Main />
            </div>
        </div>
    );
}
Home.Layout = FullLayout;
