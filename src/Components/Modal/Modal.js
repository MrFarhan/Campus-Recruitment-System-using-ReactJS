import React from 'react'
import { Button, Container, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import "./Modal.css"

export const MyModal = () => {

    const state = useSelector(state => state)
    let UID = firebase.auth().currentUser?.uid

    const [modalShow, setModalShow] = React.useState(false);
    var today = new Date().toDateString()
    var todayformated = Number(new Date().toLocaleDateString())

    console.log("today formated is ", todayformated)

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
                    .max(20, 'Job Title can only be max 20 characters')
                    .required('Job Title is required'),
                jobDescription: Yup.string()
                    .min(20, 'Job Description should be 20 characters or more')
                    .required('Job Description is Required'),
                min_gpa: Yup.number()
                    .required("GPA is required")
                    .max(4, "Type GPA in between 1 to 4"),
                salary: Yup.number()
                    .required("Salary amount is required"),
                lastDate: Yup.date()
                    .required('Kindly select last date to apply')
                    .min( new Date(new Date().getTime() - 86400000) , "Date cannot be in the past"),
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
                            Add Vacancy
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
                                <Form.Control id="lastDateToApply"  type="date"  {...formik.getFieldProps('lastDate')} />
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
        <div className="ModalMain" >
            <AddVecancyModal show={modalShow} onHide={() => setModalShow(false)} />
            <Button variant="info" onClick={() => setModalShow(true)}
            // style={{marginLeft:"85.5%", marginTop:"-4em", width:"auto"}}
            >Post Job</Button>
            <br />
        </div>
    )
}

