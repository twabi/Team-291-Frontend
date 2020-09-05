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
    MDBCardTitle
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import styled from "styled-components";

const Background = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

const signUpForm = (props) => {

    const handleAccountExists = () => {
        props.accountCallback();
    };

    return (

        <MDBBox display="flex" className="w-100" justifyContent="center" >
            <MDBCol className="my-3 w-100" md="5">
                <MDBCard className="w-100">
                    <MDBCardBody>
                        <h4 className="text-center font-weight-bold text-primary">QuickMechanic App</h4>
                        <hr/>
                            <MDBCardTitle>
                                <p className="h5 font-italic text-primary text-center py-4">Create A Driver account</p>
                            </MDBCardTitle>
                            <form className="p-4 mt-4">
                                <div className="grey-text mx-2">
                                    <MDBInput
                                        label="enter your full name"
                                        icon="user"
                                        group
                                        outline
                                        type="text"
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
};

export default signUpForm;
