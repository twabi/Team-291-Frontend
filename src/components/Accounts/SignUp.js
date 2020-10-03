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
import { gql } from "@apollo/client";
import {useMutation} from "@apollo/client";

const Background = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

/*const CREATE_DRIVER = gql`
    mutation createDriver($fullName: String!, $email: String!, $password: String!, $phoneNumber: Float!) {
        createDriver(driverInput: {email: $email, password: $password, phoneNumber: $phoneNumber}){
            email
            phoneNumber
            }
    }
`;*/

const SignUpForm = (props) => {

    //const [createDriver, { data }] = useMutation(CREATE_DRIVER);
    const [showLoading, setShowLoading] = React.useState(false);


    const handleAccountExists = () => {
        props.accountCallback();
    };

    const gotoTypes = () => {
        props.typeCallback();
    };


    const handleCreate = () => {

        setShowLoading(true);

        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        //var passRepeat = document.getElementById("password-repeat").value;
        var phonenumber = parseFloat(number);

        if(name.length === 0 || email.length === 0 || password.length === 0 /*|| passRepeat.length === 0*/){
            setShowLoading(false);
            alert("Some fields cannot be left empty!");
        } else {

            //createDriver({fullName:name, email:email, password:password, phonenumber:phonenumber})

            //--------------------------------------------------------------------------------------

            const requestBody = {
                query:`
                mutation { 
                    createDriver(driverInput:{ email:"${email}", password:"${password}", phoneNumber:"${phonenumber}", fullName:"${name}"})
                {
                    _id,
                    email
                    phoneNumber
                } }
                
                `
            };
            fetch("https://secret-citadel-57463.herokuapp.com/graphql", {
               method: "POST",
                body: JSON.stringify(requestBody),
                headers:{
                    "content-type":"application/json"

                }
            })
            .then((result) => {
                setShowLoading(false);
                if(!result.status === 200 || !result.status === 201){
                    throw new Error("failed!");
                }

                alert("Driver was created successfully" );

                window.location.href = "/";
                return result.json();
            }).then((resData) => {
                //console.log(resData)
            })
            .catch((error) => {
                setShowLoading(false);
                alert("Oops! an error occurred : " + error);
            });

        }
    };

    return (

        <div>

            <MDBBox display="flex" justifyContent="center" >

                <MDBCol>
                        <div className="mb-3">
                            <MDBBtn color="primary" onClick={gotoTypes} className="float-left ">
                                <MDBIcon icon="angle-double-left" className="white-text" size="1x"/>
                            </MDBBtn>
                            <h5 className="h4 text-primary text-center">Driver account</h5>
                        </div>

                    <form className=" mt-5">
                        <div className="md-form d-flex flex-column justify-content-center align-items-center mt-2 mx-1">
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
                                id="fullname"
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
                                id="email"
                                group
                                type="email"
                                validate
                                outline
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label=" phone number (e.g +265994970327)"
                                icon="phone"
                                id="phone"
                                group
                                outline
                                type="number"
                                validate
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label="enter your preferred password"
                                icon="key"
                                group
                                id="password"
                                outline
                                type="password"
                                validate
                                error="wrong"
                                success="right"
                            />


                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" onClick={handleCreate} className="text-white">
                                register
                                {showLoading ? <div className="spinner-border ml-2 spinner-border-sm" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> : null}

                            </MDBBtn>
                        </div>
                    </form>
                    <hr/>
                    <div className="text-center d-flex flex-column font-italic text-primary">
                        <a onClick={handleAccountExists}>I already have an account</a>
                        <a href="https://assistant.google.com/services/invoke/uid/0000002b95f10945?hl=en">
                            🅖 Ask my test app to help me out
                        </a>
                    </div>

                </MDBCol>


            </MDBBox>
        </div>


    );
};

export default SignUpForm;