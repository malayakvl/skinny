import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputText } from '../_form';
import React, { useState } from 'react';
import Select from 'react-select';
import countriesData from "@/components/_data/countries.json";
import {setActiveLayoutAction} from "@/redux/layouts";
import { useDispatch, useSelector } from 'react-redux';
import statesData from "@/components/_data/states.json";
import {getAddressDataSelector} from "@/redux/layouts/selectors";

function Payment() {
    const dispatch = useDispatch();
    const paymentData = useSelector(getAddressDataSelector);
    // const [selectedCountry, setSelectedCountry] = useState(paymentData['country']);
    // const [selectedState, setSelectedState] = useState(paymentData['state']);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [sameAddress, setSameAddress] = useState(true);

    let SubmitSchema;
    if (!sameAddress) {
        SubmitSchema = Yup.object().shape({
            zip_code: Yup.string().required(('Required field')),
            card_number: Yup.string().required(('Required field')),
            card_name: Yup.string().required(('Required field')),
            card_exp: Yup.string().required(('Required field')),
            last_name: Yup.string().required(('Required field')),
            post_code: Yup.string().required(('Required field')),
            email: Yup.string().required(('Required field')),
            city: Yup.string().required(('Required field')),
            address: Yup.string().required(('Required field'))
        });
    } else {

    }

    return (
        <Formik
            enableReinitialize
            initialValues={{email: '1@1.com'}}
            validationSchema={SubmitSchema}
            onSubmit={(values) => {
                dispatch(setActiveLayoutAction('payment'));
                console.log(values)
            }}>
            {(props) => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <div className="payment-top w-100 d-block">
                            <ul>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Contact</span>
                                    <span onClick={() => dispatch(setActiveLayoutAction('address'))}
                                          className="fake-link">
                                        Change
                                    </span>
                                </li>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Ship to</span>
                                    <span onClick={() => dispatch(setActiveLayoutAction('address'))} className="fake-link">
                                        Change
                                    </span>
                                </li>
                                <li className="d-flex w-100 flex-wrap justify-content-between"><span
                                    className="left-text">Shipping method</span> <span>Standard</span> <span><a
                                    href="#">Change</a></span>
                                </li>
                            </ul>
                        </div>
                        <div className="payment-card-section w-100 d-block">
                            <div className="checkout-title flex-auto">Payment</div>
                            <p> All transactions are secure and encrypted. </p>
                            <div className="payment-card-box w-100 d-block">
                                <div className="payment-card-box-top w-100 d-flex flex-wrap justify-content-between">
                                    <span>Credit card </span>
                                    <span>
                                        <img src="/images/card-logo.jpg" alt="" className="img-fluid" />
                                    </span>
                                </div>
                                <div className="payment-card-box-data w-100 d-block">
                                    <div className="row gx-3">
                                        <div className="col-12">
                                            <div className="form-group w-100 d-block">
                                                <InputText
                                                    name={'card_number'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Zip code'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group w-100 d-block">
                                                <InputText
                                                    name={'card_name'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Name on card'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group w-100 d-block">
                                                <InputText
                                                    name={'card_exp'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Expiration date (MM / YY)'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group w-100 d-block">
                                                <InputText
                                                    name={'card_exp'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Security code'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
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
                                    <input type="radio" name="billing-address" checked={sameAddress} onClick={() => setSameAddress(true)} />
                                    <div className="control-indicator"></div>
                                </label>
                                <label className="control control-radio">
                                    Use a different billing address
                                    <input type="radio" name="billing-address" checked={!sameAddress} value="change" onClick={() => setSameAddress(false)} />
                                    <div className="control-indicator"></div>
                                </label>
                            </div>
                            <div className={`billing-address-form w-100 ${sameAddress ? 'd-none' : ''}`}>
                                <div className="checkout-form w-100 d-block">
                                    <div className="row gx-3">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <Select
                                                    className={'form-control-dropdown'}
                                                    classNamePrefix={'inventory'}
                                                    onChange={(value: any) => {
                                                        setSelectedCountry(value)
                                                    }}
                                                    placeholder={('Country')}
                                                    name="country_id"
                                                    value={selectedCountry}
                                                    options={countriesData}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <InputText
                                                    name={'first_name'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'First name (optional)'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <InputText
                                                    name={'last_name'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Last name'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <InputText
                                                    name={'address'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Address'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <InputText
                                                    name={'appartment'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Apartment, suite, etc. (optional)'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <InputText
                                                    name={'city'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'City'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <Select
                                                    className={'form-control-dropdown'}
                                                    classNamePrefix={'inventory'}
                                                    onChange={(value: any) => {
                                                        setSelectedState(value)
                                                    }}
                                                    placeholder={('State')}
                                                    name="state_id"
                                                    value={selectedState}
                                                    options={statesData}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <InputText
                                                    name={'post_code'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Zip code'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <InputText
                                                    name={'phone'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'Phone'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
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
