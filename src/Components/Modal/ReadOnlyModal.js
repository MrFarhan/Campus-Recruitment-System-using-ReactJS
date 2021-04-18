import React from 'react'
import { Button, Container, Modal, Form } from 'react-bootstrap';

export const ReadOnlyModal = (data) => {

    const [modalShow, setModalShow] = React.useState(data.ShowModal);

    function AddVecancyModal(props) {

        const HandleSubmit = (e) => {
            e.preventDefault()
        }

        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" >
                <form onSubmit={HandleSubmit} style={{ width: "100%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Applied Student Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Form.Group>
                                <Form.Label className="labels" htmlFor="title">Full Name</Form.Label>
                                <Form.Control id="title" type="text" value={data?.data?.fullName} disabled={true}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="labels" htmlFor="title">Email</Form.Label>
                                <Form.Control id="title" type="text" value={data?.data?.email} disabled={true} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="labels" htmlFor="title">Profile</Form.Label>
                                <Form.Control id="title" type="text" value={data?.data?.profile?.length >2 ? data?.data?.profile : "No Data "} disabled={true}/>
                            </Form.Group>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );

    }

    return (
        <>
            <AddVecancyModal show={modalShow} onHide={() => { setModalShow(false); data.onHide() }} />
            <br />
        </>
    )
}

