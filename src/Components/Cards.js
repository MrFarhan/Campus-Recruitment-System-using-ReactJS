import React from 'react'
import { Card, CardColumns, Col, Row, Container } from 'react-bootstrap'

export const Cards = ({ title, text, key2, value2, key3, value3, key4, value4, email, link, linkText, linkText2, footerKey, footerValue, clickHandler }) => {
    return (
        // <span>
        <div >
            <Card style={{ minWidth: "18em", height: "100%", display: "flex", justifyContent: "space-between" }}>
                <Card.Body style={{ minHeight: "20em" }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        {key2} {value2}
                    </Card.Text>
                    <Card.Text>
                        {key3} {value3}
                    </Card.Text>
                    <Card.Text>
                        {key4} {value4}
                    </Card.Text>
                    <Card.Link onClick={clickHandler}>{linkText}</Card.Link>
                    <Card.Link href="#">{linkText2}</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> {footerKey} {footerValue}</small>
                </Card.Footer>
            </Card>
        </div>)
}
