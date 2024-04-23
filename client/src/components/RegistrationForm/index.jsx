import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_REGISTRATION_SCHEMA } from '../../validation/userValidation';

const InitialValues = {
    firstName: 'User',
    lastName: 'Userenko',
    email: 'User@user.com',
    password: '12345user',
    passwordRepeat: '12345user',
    // imgSrc: '',
    gender: 'male'
}


export default function RegistrationForm(props) {

    const handleSubmit = (values, formikBag) => {
        console.log(values)

        const {gender, ...restUser} = values;

        const newUser = {
            ...restUser,
            id: Date.now(),
            isMale: gender === 'male'
        }

        formikBag.resetForm();
    }
  return (
    <Formik initialValues={InitialValues} onSubmit={handleSubmit} validationSchema={USER_REGISTRATION_SCHEMA}>
        <Form>
            <div>
                <label htmlFor='firstName'>
                    First name:
                </label>
                <Field name='firstName' type='text' id='firstName'/>
                <ErrorMessage name='firstName'/>
            </div>
            <div>
                <label htmlFor='lastName'>
                    Last name:
                </label>
                <Field name='lastName' type='text' id='lastName'/>
                <ErrorMessage name='lastName'/>
            </div>
            <div>
                <label htmlFor='email'>
                    Email:
                </label>
                <Field type='email' name='email' id='email'/>
                <ErrorMessage name='email'/>
            </div>
            <div>
                <label htmlFor='password'>
                    Password:
                </label>
                <Field type='password' name='password' id='password'/>
                <ErrorMessage name='password'/>
            </div>
            <div>
                <label htmlFor='passwordRepeat'>
                    Repeat password:
                </label>
                <Field type='password' name='passwordRepeat' id='passwordRepead'/>
                <ErrorMessage name='passwordRepeat'/>
            </div>
            <fieldset>
                <legend>Gender:</legend>
                <div>
                <label htmlFor='male'>
                    Male:
                </label>
                <Field type='radio' name='gender' id='male' value="male"/>
                <ErrorMessage name='gender'/>
                </div>
                <div>
                <label htmlFor='female'>
                    Female:
                </label>
                <Field type='radio' name='gender' id='female' value="female"/>
                <ErrorMessage name='gender'/>
                </div>
            </fieldset>
            <div>
    <button type='submit'>Register</button>
    <button type='reset'>Reset fields</button>
            </div>
        </Form>
    </Formik>
  )
}
