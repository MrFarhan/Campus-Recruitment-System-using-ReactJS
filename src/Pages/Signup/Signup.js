import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



export const Signup = () => {

    let history = useHistory()
    const [signuperror, setSignuperror] = React.useState()

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            radioType: "",
            acceptedTerms: false,

        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, 'Name should be 15 characters or less')
                .required('First Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is Required'),
            password: Yup.string()
                .min(5, 'Password Must be 5 or more then 5 characters Long ')
                .max(15, 'Password Must be 15 characters or less')
                .required('Password is Required'),
            confirmPassword: Yup.string()
                .max(20, 'Confirm pasword Must also be 20 characters or less')
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            radioType: Yup.mixed()
                .required('Selection is Required')
                .oneOf(['Student', 'Company']),
            acceptedTerms: Yup.boolean()
                .required("Kindly accept our terms and conditions to proceed with signup ")
                .oneOf([true], "Terms and condition acceptance is mandatory")
        }),
        onSubmit: values => {
            SignupFunc(values)
        },

    });

    const SignupFunc = (values) => {
        history.push("/")
    }


    const LoginFunc = () => {
        history.push("/")
    }

    return (
        <div >

            <Form onSubmit={formik.handleSubmit} >
                <Form.Group>
                    <Form.Label className="labels" htmlFor="fullName">Full Name</Form.Label>
                    <Form.Control id="fullName" type="text" placeholder="Enter Your Name" {...formik.getFieldProps('fullName')} autoFocus />
                    <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
                        <div>{formik.errors.fullName}</div>
                    ) : null}</span>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels" htmlFor="email">Email address</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter Email Address" {...formik.getFieldProps('email')} {...formik.handleChange}
                        onFocus={() => {
                            setSignuperror("");
                        }}
                    />
                    <span className="inputerror">  {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}</span>

                    <span className="inputerror">  {formik.touched.email && signuperror && signuperror.length ? (
                        <div>{signuperror}</div>
                    ) : null}</span>

                </Form.Group>

                <Form.Group style={{ display: "flex" }} {...formik.getFieldProps('radioType')} >
                    <Form.Label style={{ marginRight: "1rem" }}>
                        Signup as
                </Form.Label>
                    <Form.Check style={{ justifyContent: "flex-start" }}
                        type="radio"
                        label="Student"
                        name="radioType"
                        id="Student"
                        value="Student"
                    />
                    <Form.Check style={{ marginLeft: "1rem" }}
                        type="radio"
                        label="Company"
                        name="radioType"
                        id="Company"
                        value="Company"
                    />
                    <div>
                        <br />
                        <div className="inputerror" style={{ marginLeft: "-16.5em" }}>  {formik.touched.radioType && formik.errors.radioType ? (
                            <div>{formik.errors.radioType}</div>
                        ) : null}</div>
                    </div>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" {...formik.getFieldProps('password')} />
                    <span className="inputerror">{formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}</span>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Confirm Password</Form.Label>
                    <Form.Control id="confirmPassword" type="password" placeholder="confirm Password" {...formik.getFieldProps('confirmPassword')} />
                    <span className="inputerror">{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div>{formik.errors.confirmPassword}</div>
                    ) : null}</span>
                </Form.Group>

                <Form.Group>
                    <div>
                        <Form.Check style={{ display: "flex", marginTop: "0.199rem" }} type="checkbox" label="I hereby agree all terms of services " {...formik.getFieldProps('acceptedTerms')} />
                        <span className="inputerror">{formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <div>{formik.errors.acceptedTerms}</div>
                        ) : null}</span></div>
                </Form.Group>

                <Button variant="primary" type="submit" > Sign up</Button>
                <Button variant="link" type="button" onClick={LoginFunc}>Already have an account ?</Button>
            </Form>
        </div>
    );
};