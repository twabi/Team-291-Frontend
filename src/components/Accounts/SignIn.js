import React from "react";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBBox,
    MDBCardTitle,
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import AccountType from "./AccountType";
import SignUp from "./SignUp";
import MechRegister from "./Mechregister";

const SignInForm = (props) => {

    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const [showError, setShowError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState();
    const [showLogin, setShowLogin] = React.useState(true);
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [showType, setShowType] = React.useState(false);
    const [showMechSign, setShowMechSign] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);

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
    };

    var logged  = false;
    const auntheticate = (username, password) => {

        /*
        users.map((user, index) => {
            if((username === user.username) && (password === user.password)){
                //window.location.href="/home";
                logged = true;
                props.getLoggedInData(user, logged);
            }
        });

         */

        const requestBody = {
            query:`
               query {
                  login(email: "${username}", password: "${password}"){
                    token
                    accountType
                    fullName
                  }
                }
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

                return result.json();
            }).then((resData) => {
                //console.log(resData, resData.data.login);
                logged = true;
                props.getLoggedInData(resData.data.login, logged);
            })
            .catch((error) => {
                setShowLoading(false);
                alert("Oops! an error occurred : " + error);
            });
    };

    const login = () => {
        if(userName === "" || password === ""){
            setErrorMessage("Textfields cannot be left empty!!");
            setShowError(true);

        } else {
            setShowLoading(true);
            //props.login(userName, password);
            auntheticate(userName, password);
        }
    };

    const alreadyHaveAccount = () => {
        setShowType(false);
        setShowSignUp(false);
        setShowLogin(true);
        setShowMechSign(false);
    };

    const showTypesMenu = () => {
        setShowType(true);
        setShowSignUp(false);
        setShowLogin(false);
        setShowMechSign(false);
    };


    return (
    <div>

            {showLogin ?
                <MDBBox display="flex" justifyContent="center">
                <MDBCol>
                    <MDBCardTitle><p className="h5 text-primary  font-italic text-center py-2">Login</p></MDBCardTitle>
                    {showError ? <p className="red-text my-2 text-center">{errorMessage}</p> : null}
                    <form className={"mt-1"}>
                        <div className="grey-text mx-4 p-4">
                            <MDBInput
                                label="username or email"
                                icon="user"
                                group
                                value={userName}
                                onChange={(e) => {handleNameChange(e);}}
                                type="email"
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
                                        {showLoading ? <div className="spinner-border ml-2 spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> : null}
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>


                        </div>

                    </form>
                    <hr/>
                    <div className="text-center font-italic text-primary">
                        <a onClick={handleNoAccount}>I don't have an account</a>
                    </div>

                </MDBCol>
                </MDBBox>
                :null}


            {showType? <AccountType accountCallback={alreadyHaveAccount} typeCallback={typeCallback}/>:null}
            {showSignUp? <SignUp typeCallback={showTypesMenu} accountCallback={alreadyHaveAccount}/> : null}
            {showMechSign? <MechRegister typeCallback={showTypesMenu}  accountCallback={alreadyHaveAccount}/>: null}


     </div>
    );
};

export default SignInForm;