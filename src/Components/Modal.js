import React from 'react'
import { Button, Container, Modal, Form } from 'react-bootstrap';


export const MyModal = () => {

    const [modalShow, setModalShow] = React.useState(false);

    function AddVecancyModal(props) {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Vacency
              </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Form.Group>
                            <Form.Label className="labels" htmlFor="title">Job Title</Form.Label>
                            <Form.Control id="title" type="text" placeholder="Job Title here"
                                // {...formik.getFieldProps('fullName')} 
                                autoFocus />
                            {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
                                <div>{formik.errors.fullName}</div>
                            ) : null}</span> */}
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="labels" htmlFor="gpa">Minimum GPA Required</Form.Label>
                            <Form.Control id="gpa" type="number" placeholder="Minimum GPA Required"
                            // {...formik.getFieldProps('fullName')} 
                            />
                            {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
                                <div>{formik.errors.fullName}</div>
                            ) : null}</span> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="labels" htmlFor="salary">Minimum Salary</Form.Label>
                            <Form.Control id="salary" type="number" placeholder="Minimum Salary"
                            // {...formik.getFieldProps('fullName')} 
                            />
                            {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
                                <div>{formik.errors.fullName}</div>
                            ) : null}</span> */}
                        </Form.Group>

                        <Form.Group >
                            <Form.Label className="labels" htmlFor="lastDateToApply">Last Date to Apply</Form.Label>
                            <Form.Control id="lastDateToApply" type="date" placeholder="Select your date of birth"
                            // {...formik.getFieldProps('dateofBirth')}
                            />
                            {/* <span className="inputerror">  {formik.touched.dateofBirth && formik.errors.dateofBirth ? (
                                <div>{formik.errors.dateofBirth}</div>
                            ) : null}</span> */}
                        </Form.Group>


                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Post</Button>
                    <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <>
            <AddVecancyModal show={modalShow} onHide={() => setModalShow(false)} />
            <Button variant="outline-success" onClick={() => setModalShow(true)} >Post Job</Button>
            <br />
        </>
    )
}

