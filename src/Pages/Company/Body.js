import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MyModal } from './Modal';

export const Body = () => {
    return (
        <>
            <MyModal />
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "#ace5d8", width: "100vw", height: "300px" }}>Previously posted vacencies here</Col>
                </Row>
            </Container >
        </>
    )
}
