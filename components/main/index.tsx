import React from 'react';
import CheckoutNav from "@/components/checkoutNav";
import Footer from "@/components/footer/Footer";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputText} from "@/components/_form";
import countriesData from '../../components/_data/countries.json';
import statesData from '../../components/_data/states.json';


function Main() {
    const SubmitSchema = Yup.object().shape({
        country_id: Yup.string().required(('Required field')),
        post_code: Yup.string().required(('Required field')),
        address_type: Yup.string().required(('Required field')),
        city: Yup.string().required(('Required field')),
        address_line_1: Yup.string().required(('Required field'))
    });

    return (
        <>
            <div className="checkout-logo w-100 d-none d-lg-block">
                <img src="/images/logo-blue.png" alt=""/>
            </div>
            <CheckoutNav />
            <Formik
                enableReinitialize
                initialValues={{}}
                validationSchema={SubmitSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
                            <div className="checkout-title flex-auto">Contact</div>
                            <div className="email-box w-100 d-block">
                                <InputText
                                    name={'email'}
                                    label={null}
                                    icon={null}
                                    placeholder={'Email'}
                                    style={null}
                                    props={props}
                                    tips={null}
                                />
                                <div className="checkbox-row w-100 d-block">
                                    <label className="control control-checkbox">
                                        Email me with news and offers
                                        <input type="checkbox"/>
                                        <div className="control-indicator"></div>
                                    </label>
                                </div>
                            </div>
                            <div className="checkout-form-section w-100 d-block">
                                <div className="checkout-title flex-auto">Shipping address</div>
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
                                                <InputText
                                                    name={'first_name'}
                                                    label={null}
                                                    icon={null}
                                                    placeholder={'First name (optional)'}
                                                    style={null}
                                                    props={props}
                                                    tips={null}
                                                />
                                                {/*<input type="text" id="first-name" className="form-control checkout"*/}
                                                {/*       placeholder="First name (optional)"/>*/}
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
                                                    name={'apartment'}
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
                                                <select id="state" className="form-select checkout">
                                                    <option>State</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <InputText
                                                    name={'zip_code'}
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
                                    <div className="btn-row w-100 d-flex justify-content-end">
                                        <button className="checkout-btn">Continue to payment</button>
                                    </div>
                                </div>
                            </div>

                            <Footer/>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default Main;
