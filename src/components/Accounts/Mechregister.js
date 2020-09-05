import React from "react";
import { 
    MDBCol, 
    MDBInput, 
    MDBCardFooter,  
    MDBIcon,
    MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBBox, 
    MDBCardTitle
    } from "mdbreact";
import {Input} from "antd";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import styled from "styled-components";



    // const [fileState, setFileState] = React.useState({});

    // const handleFileUpload = (e) => {
    //     //const reader = new FileReader();
    //     const file = e.target.files[0];
    //     //reader.onloadend = () => {
    //         //setFileState(reader.result);
    //     //};
    //     //reader.readAsDataURL(file);
    //     setFileState(file);
    // };

    const Background = styled.div`
        background-image: url(${(props) => props.imgUrl});
        background-repeat: no-repeat;
        background-position:center;
        background-size: cover;
    `;

    const MechRegister = (props) => {

        const handleAccountExists = () => {
            props.accountCallback();
        };

        return  (
            <MDBBox display="flex" className="w-100" justifyContent="center" >
                <MDBCol className="my-3 w-100" md="5">
                    <MDBCard className="w-100">
                        <MDBCardBody>
                            <h4 className="text-center text-primary">QuickMechanic App</h4>
                            <hr/>
                            <MDBCardTitle>
                                <p className="h5 text-primary text-center font-italic py-2">Create A Mechanic Account</p>
                            </MDBCardTitle>
                            <form className="p-4 mt-4">
                                <div className="md-form d-flex flex-column justify-content-center align-items-center my-0 mx-1">
                                    <Input type="file"
                                           style={{ width: "50%" }}
                                           accept="image/*"
                                        //    onChange={handleFileUpload}
                                           size="large"
                                           placeholder="Select profile Image" prefix={<MDBIcon icon="user-plus"/>} />
                                    {/* <p className="font-italic">{fileState.name}</p> */}
                                </div>
                                <MDBInput
                                    label="enter your user name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your phone number"
                                    icon="phone-alt"
                                    group
                                    type="number"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your garage name"
                                    icon="building"
                                    group
                                    type="text"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your garage location e.g City, Area"
                                    icon="map-marker-alt"
                                    group
                                    type="text"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your preferred password"
                                    icon="key"
                                    group
                                    type="password"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="repeat the password"
                                    icon="key"
                                    group
                                    outline
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <div className="text-center py-4 mt-5">
                                    <MDBBtn color="primary" className="text-white">
                                        Register
                                    </MDBBtn>

                                </div>
                            </form>


                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <p onClick={handleAccountExists}>I already have an account</p>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>

                </MDBCol>


            </MDBBox>

        );
    }


    export default MechRegister;
