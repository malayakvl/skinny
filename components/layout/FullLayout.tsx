import React from 'react';
import Footer from '../footer/Footer';
import CheckoutSummary from '../checkoutSummary';
import CheckoutNav from "@/components/checkoutNav";
import { useRouter } from 'next/router';

export default function FullLayout({ children }: { children: any }) {
    const router = useRouter();
    return (
        <div id="wrapper w-100 d-block">
            <div className="container small-container">
                <div className="mobile-data w-100 d-block d-lg-none">
                    <div className="checkout-logo w-100 d-block">
                        <img src="/images/logo-blue.png" alt="" className="m-auto d-block"/>
                    </div>
                    <div className="cus-breadcrumb w-100 d-block">
                        <ul>
                            <li>!!Shipping</li>
                            <li className="active">Payment</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-wrap w-100">
                    <CheckoutSummary />
                    <div className="left-side flex-auto order-lg-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
