import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import '../App.css';


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className="maininputlabel">
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className="text-input" > <input {...field} {...props} />
                {meta.touched && meta.error ? (
                    <span className="error">{meta.error}</span>
                ) : null}</div>
        </div>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className="maininputlabel">
            <label className="checkbox1">
                <input type="checkbox" {...field} {...props} />
                {children}
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </label>
        </div>
    );
};



// And now we can use these
export const Signup = () => {
    return (
        <>
            <p className="cntr">Signup to continue using our service!</p>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    gender: '', // added for our select
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    gender: Yup.boolean()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    //    setTimeout(() => {
                    //      alert(JSON.stringify(values, null, 2));
                    //      setSubmitting(false);
                    //    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="first name"
                        fullwidth
                    />
                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="last Name"
                    />
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
           </MyCheckbox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};