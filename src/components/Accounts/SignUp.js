import React from "react";
import {Link} from "react-router-dom";
import {
    MDBCol,
    MDBInput,
    MDBCardFooter,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBBox,
    MDBCardTitle, MDBIcon
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import styled from "styled-components";
import {Input} from "antd";

const Background = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

const SignUpForm = (props) => {

    const handleAccountExists = () => {
        props.accountCallback();
    };

    return (

            <MDBBox display="flex" justifyContent="center" >
                <MDBCol>
                    <MDBCardTitle><p className="h4 text-primary text-center py-2">Create A Driver account</p></MDBCardTitle>
                    <form className=" mt-2">
                        <div className="md-form d-flex flex-column justify-content-center align-items-center my-0 mx-1">
                            <Input type="file"
                                   style={{ width: "50%" }}
                                   accept="image/*"
                                //    onChange={handleFileUpload}
                                   size="large"
                                   placeholder="Select profile Image" prefix={<MDBIcon icon="user-plus"/>} />
                            {/* <p className="font-italic">{fileState.name}</p> */}
                        </div>
                        <div className="grey-text">
                            <MDBInput
                                label="enter your full name"
                                icon="user"
                                group
                                type="text"
                                outline
                                validate
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label="enter your email address"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                outline
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label="enter your preferred password"
                                icon="key"
                                group
                                outline
                                type="password"
                                validate
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label="repeat the password"
                                icon="key"
                                group
                                type="password"
                                outline
                                validate
                                error="wrong"
                                success="right"
                            />

                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" className="text-white">
                                register
                            </MDBBtn>
                        </div>
                    </form>
                    <hr/>
                    <div className="text-center font-italic text-primary">
                        <a onClick={handleAccountExists}>I already have an account</a>
                    </div>

                </MDBCol>


            </MDBBox>

    );
};

export default SignUpForm;