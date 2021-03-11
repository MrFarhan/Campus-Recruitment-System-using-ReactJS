import React from 'react'
import { Button, Col, Container, Row, Modal } from 'react-bootstrap';

export const Body = () => {

    const [modalShow, setModalShow] = React.useState(false);

    function MydModalWithGrid(props) {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Using Grid in Modal
              </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                .col-xs-12 .col-md-8
                  </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                  </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                  </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                  </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                  </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Post</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            <Container>
                <Row>
                    <Button variant="outline-success" onClick={() => setModalShow(true)} >Post Job</Button>
                    <br />
                    <Col style={{ backgroundColor: "#ace5d8", width: "100vw", height: "300px" }}>Previously posted vacencies here</Col>
                </Row>
            </Container ></>
    )
}
