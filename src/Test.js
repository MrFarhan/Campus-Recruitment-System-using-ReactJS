import React from 'react'

export const Test = () => {

    // var legalAge = new Date();
    // legalAge.setFullYear(legalAge.getFullYear() - 1);

    return (
        <div>
            This is test component
        </div>
    )
}


{/* <Spinner animation="border" /> */ }



// .then(() => {
//     if (firebase.auth().currentUser?.role === "Company") {
//         console.log("company signed up")
//     } else if (firebase.auth().currentUser?.role === "Student"){
//         console.log("Student signed up")
//     }
//     // history.push("/")
// })


// import React from 'react'
// import { Button, Col, Container, Row, Modal, Form } from 'react-bootstrap';

// export const Body = () => {

//     const [modalShow, setModalShow] = React.useState(false);

//     function AddVecancyModal(props) {
//         return (
//             <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Add Vacency
//               </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className="show-grid">
//                     <Container>
//                         <Form.Group>
//                             <Form.Label className="labels" htmlFor="title">Job Title</Form.Label>
//                             <Form.Control id="title" type="text" placeholder="Job Title here"
//                                 // {...formik.getFieldProps('fullName')} 
//                                 autoFocus />
//                             {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
//                                 <div>{formik.errors.fullName}</div>
//                             ) : null}</span> */}
//                         </Form.Group>

//                         <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>Job Description</Form.Label>
//                             <Form.Control as="textarea" rows={3} />
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label className="labels" htmlFor="gpa">Minimum GPA Required</Form.Label>
//                             <Form.Control id="gpa" type="number" placeholder="Minimum GPA Required"
//                             // {...formik.getFieldProps('fullName')} 
//                             />
//                             {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
//                                 <div>{formik.errors.fullName}</div>
//                             ) : null}</span> */}
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label className="labels" htmlFor="salary">Minimum Salary</Form.Label>
//                             <Form.Control id="salary" type="number" placeholder="Minimum Salary"
//                             // {...formik.getFieldProps('fullName')} 
//                             />
//                             {/* <span className="inputerror">  {formik.touched.fullName && formik.errors.fullName ? (
//                                 <div>{formik.errors.fullName}</div>
//                             ) : null}</span> */}
//                         </Form.Group>

//                         <Form.Group >
//                             <Form.Label className="labels" htmlFor="lastDateToApply">Last Date to Apply</Form.Label>
//                             <Form.Control id="lastDateToApply" type="date" placeholder="Select your date of birth"
//                             // {...formik.getFieldProps('dateofBirth')}
//                             />
//                             {/* <span className="inputerror">  {formik.touched.dateofBirth && formik.errors.dateofBirth ? (
//                                 <div>{formik.errors.dateofBirth}</div>
//                             ) : null}</span> */}
//                         </Form.Group>


//                     </Container>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={props.onHide}>Post</Button>
//                     <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     }


//     return (
//         <>
//             <AddVecancyModal show={modalShow} onHide={() => setModalShow(false)} />
//             <Container>
//                 <Row>
//                     <Button variant="outline-success" onClick={() => setModalShow(true)} >Post Job</Button>
//                     <br />
//                     <Col style={{ backgroundColor: "#ace5d8", width: "100vw", height: "300px" }}>Previously posted vacencies here</Col>
//                 </Row>
//             </Container ></>
//     )
// }

















        // // <Layout>
        // <div  >
        //     <Form  >
        //         {/* <div className="mb-3">
        //                 <Form.File >
        //                     <img src={dp} className="profilePagePic" alt="Profile pic" />
        //                     <Form.File.Input onChange={((e) => imgUpload(e))} />
        //                 </Form.File>
        //                 <span className="inputerror">{uploadError && uploadError.length ? "Kindly upload image with JPG or PNG format" : null}</span>
        //             </div> */}


        //         {console.log("props are : ", props)}
        //         <Form.Group>
        //             <Form.Label className="labels" htmlFor="firstName">First Name</Form.Label>
        //             <Form.Control id="firstName" type="text" placeholder="Enter First Name" 
        //             // {...formik.getFieldProps('firstName')}
        //              autoFocus />
        //             {/* <span className="inputerror">  {formik.touched.firstName && formik.errors.firstName ? (
        //                     <div>{formik.errors.firstName}</div>
        //                 ) : null}</span> */}
        //         </Form.Group>

        //         <Form.Group>
        //             <Form.Label className="labels" htmlFor="lastName">Last Name</Form.Label>
        //             <Form.Control id="lastName" type="text" placeholder="Enter Last Name" 
        //             // {...formik.getFieldProps('lastName')}
        //              />
        //             {/* <span className="inputerror">  {formik.touched.lastName && formik.errors.lastName ? (
        //                     <div>{formik.errors.lastName}</div>
        //                 ) : null}</span> */}
        //         </Form.Group>

        //         <Form.Group>
        //             <Form.Label className="labels" htmlFor="email">Email address</Form.Label>
        //             <Form.Control id="email" type="email" placeholder="Enter Email" 
        //             // {...formik.getFieldProps('email')}
        //              disabled />
        //             {/* <span className="inputerror">  {formik.touched.email && formik.errors.email ? (
        //                     <div>{formik.errors.email}</div>
        //                 ) : null}</span> */}
        //         </Form.Group>

        //         <>
        //             <Form.Label className="labels" htmlFor="cNumber" style={{ display: "flex" }}>Phone Number</Form.Label>
        //             <InputGroup style={{ marginBottom: "1rem" }}>
        //                 <InputGroup.Text>+92</InputGroup.Text>
        //                 <Form.Control id="cNumber" type="number" placeholder="Enter your mobile number" 
        //                 // {...formik.getFieldProps('cNumber')}
        //                  />
        //             </InputGroup>
        //             {/* <span className="inputerror" style={{ marginBottom: "1rem", marginTop: "-1rem" }}>  {formik.touched.cNumber && formik.errors.cNumber ? (
        //                     <div>{formik.errors.cNumber}</div>
        //                 ) : null}</span> */}


        //         </>


        //         <Form.Group >
        //             <Form.Label className="labels" htmlFor="dateofBirth">Select your date of birth</Form.Label>
        //             <Form.Control id="dateofBirth" type="date" placeholder="Select your date of birth" 
        //             // {...formik.getFieldProps('dateofBirth')}
        //              disabled />
        //             {/* <span className="inputerror">  {formik.touched.dateofBirth && formik.errors.dateofBirth ? (
        //                     <div>{formik.errors.dateofBirth}</div>
        //                 ) : null}</span> */}
        //         </Form.Group>



        //         <Form.Group style={{ display: "flex" }} 
        //         // {...formik.getFieldProps('gender')}
        //          >
        //             <Form.Label style={{ marginRight: "1rem" }}>Gender</Form.Label>
        //             <Form.Check style={{ justifyContent: "flex-start" }}
        //                 type="radio"
        //                 label="Male"
        //                 name="gender"
        //                 id="Male"
        //                 value="Male"
        //                 // checked={formik?.values?.['gender'] === 'Male'} disabled
        //             />
        //             <Form.Check style={{ marginLeft: "1rem" }}
        //                 type="radio"
        //                 label="Female"
        //                 name="gender"
        //                 id="Female"
        //                 value="Female"
        //                 // checked={formik?.values?.['gender'] === 'Female'} disabled
        //             />
        //             {/* <div>                <br /><div className="inputerror" style={{ marginLeft: "-13em" }}>  {formik.touched.gender && formik.errors.gender ? (
        //                     <div>{formik.errors.gender}</div>
        //                 ) : null}</div></div> */}
        //         </Form.Group>



        //         <Button variant="primary" type="submit" > Update</Button>
        //     </Form>

        // </div >
        // // </Layout >
