import React from 'react'
import { Button, Card, Dropdown, DropdownButton } from 'react-bootstrap'
import "./Card.css"

export const Cards = ({ title, text, key2, value2, key3, value3, key4, value4, email, linkText, linkText2, footerKey, footerValue, clickHandler, dropDownValue, dropDownClickHandler }) => {

    const ChangeHandler = (e) => {
        dropDownClickHandler(e)
    }
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "2em", marginRight:"0.4em", marginLeft:"0.2em" }}>
            <Card style={{ width: "18em", height: "100%", display: "flex", justifyContent: "space-between" }}>
                <Card.Body style={{ display: "flex", flexDirection: "column", minHeight: "20em" }}>
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
                    <span style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
                        {linkText ? <Button variant="danger" onClick={clickHandler}>{linkText}</Button>
                            : null}<br />
                        <Card.Link href="#">{linkText2}</Card.Link>

                        {dropDownValue ?
                            <DropdownButton variant="secondary"
                                menuAlign="right"
                                title="Applied Students"
                                id="dropdown-menu-align-right"
                                onSelect={ChangeHandler}

                            >
                                {dropDownValue.length > 0 ? dropDownValue?.map((item, index) => (
                                    <Dropdown.Item eventKey={item?.uid} >{item?.fullName}</Dropdown.Item>

                                )) :
                                    <Dropdown.Item eventKey="no dat">No Entries</Dropdown.Item>
                                }

                            </DropdownButton> : null}
                    </span>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> {footerKey} {footerValue}</small>
                </Card.Footer>
            </Card>
        </div>)
}
