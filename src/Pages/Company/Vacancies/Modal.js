import React from 'react'
import { Button, Container, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from "firebase";
import { useSelector } from 'react-redux';

export const MyModal = () => {

    const state = useSelector(state => state)
    let UID = firebase.auth().currentUser?.uid

    const [modalShow, setModalShow] = React.useState(false);
    var today = new Date().toDateString()

    function AddVecancyModal(props) {
        const formik = useFormik({
            initialValues: {
                jobTitle: "",
                jobDescription: "",
                min_gpa: "",
                salary: "",
                lastDate: "",
            },
            validationSchema: Yup.object({
                jobTitle: Yup.string()
                    .max(15, 'Job Title should be at least 15 characters or less')
                    .required('Job Title is required'),
                jobDescription: Yup.string()
                    .min(20, 'Job Description should be 20 characters or more')
                    .required('Job Description is Required'),
                min_gpa: Yup.number()
                    .required("Phone number is required")
                    .max(4, "GPA can not exceed 4 charactors"),
                salary: Yup.number()
                    .required("Phone number is required")
                    .max(4, "GPA can not exceed 4 charactors"),
                lastDate: Yup.date()
                    .required('Kindly select last date to apply)'),
            }),
            onSubmit: values => {
                PostJob(values)
            },

        });
        const PostJob = (values) => {
            const jobUUID = Date.now()
            firebase.database().ref(`Jobs/${jobUUID}`).update({
                jobTitle: values.jobTitle,
                jobDescription: values.jobDescription,
                min_gpa: values.min_gpa,
                salary: values.salary,
                lastDate: values.lastDate,
                uid: UID,
                lastDateToApply: today,
                postedBy: state?.currentUser?.fullName,
                jobUUID: jobUUID
            })
            setModalShow(false)
        }

        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" >
                <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Vacency
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Form.Group>
                                <Form.Label className="labels" htmlFor="title">Job Title</Form.Label>
                                <Form.Control id="title" type="text" placeholder="Job Title here" {...formik.getFieldProps('jobTitle')} autoFocus />
                                <span className="inputerror">  {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                    <div>{formik.errors.jobTitle}</div>
                                ) : null}</span>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control as="textarea" rows={3} {...formik.getFieldProps('jobDescription')} />
                                <span className="inputerror">  {formik.touched.jobDescription && formik.errors.jobDescription ? (
                                    <div>{formik.errors.jobDescription}</div>
                                ) : null}</span>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="labels" htmlFor="gpa">Minimum GPA Required</Form.Label>
                                <Form.Control id="gpa" type="number" placeholder="Minimum GPA Required"{...formik.getFieldProps('min_gpa')} />
                                <span className="inputerror">  {formik.touched.min_gpa && formik.errors.min_gpa ? (
                                    <div>{formik.errors.min_gpa}</div>
                                ) : null}</span>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="labels" htmlFor="salary">Minimum Salary</Form.Label>
                                <Form.Control id="salary" type="number" placeholder="Minimum Salary" {...formik.getFieldProps('salary')} />
                                <span className="inputerror">  {formik.touched.salary && formik.errors.salary ? (
                                    <div>{formik.errors.salary}</div>
                                ) : null}</span>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className="labels" htmlFor="lastDateToApply">Last Date to Apply</Form.Label>
                                <Form.Control id="lastDateToApply" type="date" {...formik.getFieldProps('lastDate')} />
                                <span className="inputerror">  {formik.touched.lastDate && formik.errors.lastDate ? (
                                    <div>{formik.errors.lastDate}</div>
                                ) : null}</span>
                            </Form.Group>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" >Post</Button>
                        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );

    }

    return (
        <>
            <AddVecancyModal show={modalShow} onHide={() => setModalShow(false)} />
            <Button variant="outline-success" onClick={() => setModalShow(true)} style={{ display: "block", width: "50%" , marginTop:"2em", marginLeft:"25%"}}>Post Job</Button>
            <br />
        </>
    )
}

