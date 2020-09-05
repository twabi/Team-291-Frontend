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
import {Link} from "react-router-dom";
import styled from "styled-components";
import AccountType from "./AccountType";
import SignUp from "./SignUp";
import MechRegister from "./Mechregister";

const Background = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`;

const SignInForm = (props) => {

    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const [showError, setShowError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState();
    const [showLogin, setShowLogin] = React.useState(true);
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [showType, setShowType] = React.useState(false);
    const [showMechSign, setShowMechSign] = React.useState(false);

    const handleNameChange = ({target : {value}}) => {
        setUserName(value);
    };

    const handlePassChange = ({target : {value}}) => {
        setPassword(value);
    };

    const typeCallback = (choice) => {
        if(choice === "Driver"){
            setShowSignUp(true);
            setShowLogin(false);
            setShowMechSign(false);
            setShowType(false);

        } else if(choice === "Mechanic"){
            setShowSignUp(false);
            setShowLogin(false);
            setShowMechSign(true);
            setShowType(false);
        }
    };

    const handleNoAccount = () => {
        setShowType(true);
        setShowSignUp(false);
        setShowLogin(false);
        setShowMechSign(false);
    }

    const login = () => {
        if(userName === "" || password === ""){
            setErrorMessage("Textfields cannot be left empty!!");
            setShowError(true);

        }else {
            props.login(userName, password);
        }
    };

    const alreadyHaveAccount = () =>{
        setShowType(false);
        setShowSignUp(false);
        setShowLogin(true);
        setShowMechSign(false);
    }


    return (

            <MDBBox display="flex" justifyContent="center" className="background">
                    {showLogin ?
                        <MDBCol className="my-4 mt-2" md="5">
                            <MDBCard className="mt-2">
                                <MDBCardBody>
                                    <h4 className="text-center font-weight-bold text-primary">QuickMechanic App</h4>
                                    <hr/>
                                    <MDBCardTitle><p className="h5 text-primary  font-italic text-center py-4">Login</p></MDBCardTitle>
                                    {showError ? <p className="red-text my-4 text-center">{errorMessage}</p> : null}
                                    <form className={"mt-5"}>
                                        <div className="grey-text mx-4 p-4">
                                            <MDBInput
                                                label="username or email"
                                                icon="user"
                                                group
                                                value={userName}
                                                onChange={(e) => {handleNameChange(e);}}
                                                type="text"
                                                validate
                                                outline
                                                error="wrong"
                                                success="right"
                                            />


                                            <MDBInput
                                                label="enter your password"
                                                icon="key"
                                                group
                                                value={password}
                                                onChange={(e) => {handlePassChange(e);}}
                                                type="password"
                                                validate
                                                outline
                                                error="wrong"
                                                success="right"
                                            />


                                        </div>
                                        <div className="text-center py-2 my-1">
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
                                                    <MDBBtn onClick={login} color="info">
                                                        login
                                                    </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>


                                        </div>

                                    </form>


                                </MDBCardBody>
                                <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                                    <div>
                                        <p onClick={handleNoAccount}>I don't have an account</p>
                                    </div>
                                </MDBCardFooter>
                            </MDBCard>

                        </MDBCol>
                        :null}


                    {showType? <AccountType accountCallback={alreadyHaveAccount} typeCallback={typeCallback}/>:null}
                    {showSignUp? <SignUp accountCallback={alreadyHaveAccount}/> : null}
                    {showMechSign? <MechRegister accountCallback={alreadyHaveAccount}/>: null}


            </MDBBox>

    );
};

export default SignInForm;
