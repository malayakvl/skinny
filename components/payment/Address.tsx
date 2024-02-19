import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputText } from '../_form';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countriesData from "@/components/_data/countries.json";
import {setActiveLayoutAction} from "@/redux/layouts";
import { useDispatch, useSelector } from 'react-redux';

function Address() {
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
                console.log(values)
                dispatch(setActiveLayoutAction('payment'));
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
                                    <div className="col-12 mb-4">
                                        <div className="form-group">
                                            <Select
                                                className={'form-control-dropdown'}
                                                classNamePrefix={'inventory'}
                                                onChange={(value: any) => {
                                                    console.log(1);
                                                }}
                                                placeholder={('Country')}
                                                name="country_id"
                                                value={null}
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
                                    <button className="checkout-btn" type="submit">Continue to payment</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            )}
        </Formik>
    );
}

export default Address;
