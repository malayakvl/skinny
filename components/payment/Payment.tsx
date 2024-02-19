import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputText } from '../_form';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countriesData from "@/components/_data/countries.json";
import {setActiveLayoutAction} from "@/redux/layouts";
import { useDispatch, useSelector } from 'react-redux';

function Payment() {
    const dispatch = useDispatch();

    const SubmitSchema = Yup.object().shape({
        // last_name: Yup.string().required(('Required field')),
        // country_id: Yup.string().required(('Required field')),
        // post_code: Yup.string().required(('Required field')),
        email: Yup.string().required(('Required field')),
        // city: Yup.string().required(('Required field')),
        // address: Yup.string().required(('Required field'))
    });

    const validateEmail = (email: string) => {
        if (!email) {
            return false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return false;
        }

        return true;
    };

    return (
        <Formik
            enableReinitialize
            initialValues={{email: '1@1.com'}}
            validationSchema={SubmitSchema}
            onSubmit={(values) => {
                dispatch(setActiveLayoutAction('payment'));
            }}>
            {(props) => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <div className="payment-top w-100 d-block">
                            <ul>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Contact</span> <span><a href="#">Change</a></span></li>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Ship to</span> <span><a href="#">Change</a></span></li>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Shipping method</span> <span>Standard</span> <span><a
                                    href="#">Change</a></span></li>
                            </ul>
                        </div>
                        <div className="payment-card-section w-100 d-block">
                            <div className="checkout-title flex-auto">Payment</div>
                            <p> All transactions are secure and encrypted. </p>
                            <div className="payment-card-box w-100 d-block">
                                <div className="payment-card-box-top w-100 d-flex flex-wrap justify-content-between">
                                    <span>Credit card </span> <span><img src="images/card-logo.jpg" alt=""
                                                                         className="img-fluid"/></span></div>
                                <div className="payment-card-box-data w-100 d-block">
                                    <div className="row gx-3">
                                        <div className="col-12">
                                            <div className="form-group w-100 d-block">
                                                <input type="text" id="card-number" placeholder="Card Number"
                                                       className="form-control checkout"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group w-100 d-block">
                                                <input type="text" id="name" placeholder="Name on card"
                                                       className="form-control checkout"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group w-100 d-block">
                                                <input type="text" id="expiration"
                                                       placeholder="Expiration date (MM / YY)"
                                                       className="form-control checkout"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group w-100 d-block">
                                                <input type="text" id="Security-code" placeholder="Security code"
                                                       className="form-control checkout"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="billing-address-section w-100 d-block">
                            <div className="checkout-title flex-auto">Billing address</div>
                            <p> Select the address that matches your card or payment method. </p>
                            <div className="radio-button-row w-100 d-block">
                                <label className="control control-radio">
                                    Same as shipping address
                                    <input type="radio" name="billing-address" />
                                    <div className="control-indicator"></div>
                                </label>
                                <label className="control control-radio">
                                    Use a different billing address
                                    <input type="radio" name="billing-address" id="address-change"/>
                                    <div className="control-indicator"></div>
                                </label>
                            </div>
                            <div className="billing-address-form w-100 d-none">
                                <div className="checkout-form w-100 d-block">
                                    <div className="row gx-3">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <select id="country" className="form-select checkout">
                                                    <option data-code="US" data-pure-numeric-postal-code="false"
                                                            value="United States"> United States
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="first-name" className="form-control checkout"
                                                       placeholder="First name (optional)"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="last-name" className="form-control checkout"
                                                       placeholder="Last name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" id="address" className="form-control checkout"
                                                       placeholder="Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" id="apartment" className="form-control checkout"
                                                       placeholder="Apartment, suite, etc. (optional)"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input type="text" id="city" className="form-control checkout"
                                                       placeholder="City"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <select id="state" className="form-select checkout">
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input type="text" id="zipCode	" className="form-control checkout"
                                                       placeholder="Zip code"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="tel" id="phone" className="form-control checkout"
                                                       placeholder="Phone"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-row w-100 d-flex justify-content-between">
                            <div className="back-link" onClick={() => dispatch(setActiveLayoutAction('address'))}>
                                <a href="#">
                                    <svg focusable="false" aria-hidden="true"
                                         className="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                        <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
                                    </svg>
                                    Return to shipping
                                </a>
                            </div>
                            <button className="checkout-btn">Checkout now</button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default Payment;
