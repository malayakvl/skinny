import React from 'react';
import CheckoutNav from "@/components/checkoutNav";
import Footer from "@/components/footer/Footer";
import Address from "@/components/payment/Address";
import Payment from "@/components/payment/Payment";
import { useSelector } from 'react-redux';
import { getActiveLayoutSelector } from "@/redux/layouts/selectors";


function Main() {
    const activeLayout = useSelector(getActiveLayoutSelector);

    return (
        <>
            <div className="checkout-logo w-100 d-none d-lg-block">
                <img src="/images/logo-blue.png" alt=""/>
            </div>
            <CheckoutNav />
            {activeLayout == 'address' && (
                <Address />
            )}
            {activeLayout == 'payment' && (
                <Payment />
            )}
            <Footer/>
        </>
    );
}

export default Main;
