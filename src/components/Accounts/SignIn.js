import React from "react";
import {
MDBRow, 
MDBCol, 
MDBInput, 
MDBCardFooter,
MDBBtn, 
MDBCard, 
MDBCardBody, 
MDBBox, 
MDBCardTitle, 
MDBIcon
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
<<<<<<< HEAD:src/components/SignIn.js
import HomeLayout from "./HomeLayout";
=======
import {Link} from "react-router-dom";
import styled from "styled-components";
>>>>>>> da91dbc6713c311841e66638b1e18e9d292aff23:src/components/Accounts/SignIn.js

const Background = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

const SignInForm = (props) => {

<<<<<<< HEAD:src/components/SignIn.js
    const [showHome, setShowHome] = React.useState(false);
    const [showLogin, setShowLogin] = React.useState(true);


    //handle the onclick event to go to the sign up page
    const handleCreateAccount = () => {
        //call the props function from the parent component
        props.callback();
    };

    const handleLogin = () => {
        setShowHome(true);
        setShowLogin(false);
    };

    return (
        <div>
            {showLogin ? <div className="background">

                <MDBBox display="flex" justifyContent="center" >
                    <MDBCol className="my-5" md="5">
                        <MDBCard >
                            <MDBCardBody>
                                <h4 className="text-center text-primary">QuickMechanic App</h4>
                                <hr/>
                                <MDBCardTitle><p className="h5 font-italic text-primary text-center py-2">Sign In</p></MDBCardTitle>
                                <form className="p-4 mt-4">
                                    <div className="grey-text mx-2">
                                        <MDBInput
                                            label="username or email"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />


                                        <MDBInput
                                            label="enter your password"
                                            icon="key"
                                            group
                                            type="password"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />


                                    </div>
                                    <div className="text-center py-4 my-4">
                                        <MDBRow className="d-flex flex-row justify-content-center align-content-center">
                                            <MDBCol md="6" >

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="defaultChecked2" checked/>
                                                    <label className="custom-control-label text-info" htmlFor="defaultChecked2">
                                                        Remember Me </label>
                                                </div>

                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBBtn onClick={handleLogin} color="info">
                                                    sign in
                                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>


                                    </div>

                                    <div className="row my-3 d-flex justify-content-center">
                                        <MDBBtn
                                            type="button"
                                            color="blue"
                                            rounded
                                            className="mr-md-3 w-25 z-depth-1a"
                                        >
                                            <MDBIcon fab icon="facebook-f" className="white-text text-center" />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="light-blue"
                                            rounded
                                            className="mr-md-3 w-25 z-depth-1a"
                                        >
                                            <MDBIcon fab icon="twitter" className="white-text" />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="red"
                                            rounded
                                            className="z-depth-1a w-25"
                                        >
                                            <MDBIcon fab icon="google-plus-g" className="white-text" />
                                        </MDBBtn>
                                    </div>
                                </form>


                            </MDBCardBody>
                            <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                                <div>
                                    <a onClick={handleCreateAccount}>I don't have an account</a>
=======
    return (
        <Background imgUrl={process.env.PUBLIC_URL + "/mech.jpg"}>

            <MDBBox display="flex" justifyContent="center" >
                <MDBCol className="my-4" md="5">
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle><p className="h4 text-primary text-center py-4">Login</p></MDBCardTitle>
                            <form>
                                <div className="grey-text mx-2">
                                    <MDBInput
                                        label="username or email"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />


                                    <MDBInput
                                        label="enter your password"
                                        icon="key"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />


                                </div>
                                <div className="text-center py-5 my-5">
                                    <MDBRow className="d-flex flex-row justify-content-center align-content-center">
                                        <MDBCol md="6" >

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultChecked2"/>
                                                    <label className="custom-control-label text-info" htmlFor="defaultChecked2">
                                                        Remember Me </label>
                                            </div>

                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBBtn href="/" color="info">
                                                login
                                                <MDBIcon far icon="paper-plane" className="ml-1" />
                                            </MDBBtn>
                                        </MDBCol>
                                    </MDBRow>


>>>>>>> da91dbc6713c311841e66638b1e18e9d292aff23:src/components/Accounts/SignIn.js
                                </div>
                            </MDBCardFooter>
                        </MDBCard>

                    </MDBCol>


<<<<<<< HEAD:src/components/SignIn.js
                </MDBBox>
=======
                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <Link to="/register">I don't have an account</Link>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>
>>>>>>> da91dbc6713c311841e66638b1e18e9d292aff23:src/components/Accounts/SignIn.js


            </div> :null}

            {showHome ? <HomeLayout/> : null}

<<<<<<< HEAD:src/components/SignIn.js
        </div>

=======
        </Background>
>>>>>>> da91dbc6713c311841e66638b1e18e9d292aff23:src/components/Accounts/SignIn.js
    );
};

export default SignInForm;
