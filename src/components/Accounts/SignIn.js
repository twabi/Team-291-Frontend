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
import AccountType from "./AccountType";
import SignUp from "./SignUp";
import MechRegister from "./Mechregister";
import {Link} from "react-router-dom";
import Map from "../map";

const SignInForm = (props) => {


    const users = [
        {
            uuid: "ef0c2274-706f-419f-8ce0-c72e251b5e4f",
            fullname: "Ahmed Twabi",
            username: "twabi",
            password: "my",
            accountType: "Driver",
            md5: "88ec545f1d7201dbf84198e4c9a664b3",
            sha1: "d71250f0798aa0811a4186a1de35aa4bc865b6ec",
            sha256: "2a617a3dafe8e57c16116c5a05d850dd0f7953cdc48224d738d66246beb51e6f"

        },
        {
            uuid: "8b36f8a9-7b20-4b5f-b120-32ef0479230c",
            fullname: "Sammy Kiiza",
            username: "sammyKiiza",
            password: "shadow",
            accountType: "Mechanic",
            md5: "cb3da3c6fb945a891daccfd3abff1d0e",
            sha1: "e55b1786e78bad82edab2a606d06e0c8e56f06d2",
            sha256: "b0636443ee5188936b4936ac5e8f192e07543252f4d467224dedc799027e9fbe"
        }
    ];

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
    };

    var logged  = false;
    const auntheticate = (username, password) => {

        users.map((user, index) => {
            if((username === user.username) && (password === user.password)){
                //window.location.href="/home";
                logged = true;
                props.getLoggedInData(user, logged);
            }
        });

        if(!logged){
            alert("username or password is wrong");
        }
    };

    const login = () => {
        if(userName === "" || password === ""){
            setErrorMessage("Textfields cannot be left empty!!");
            setShowError(true);

        } else {
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


    return (
    <div>
        <MDBBox display="flex" justifyContent="center">
            {showLogin ?
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
                    <hr/>
                    <div className="text-center font-italic text-primary">
                        <a onClick={handleNoAccount}>I don't have an account</a>
                    </div>

                </MDBCol>
                :null}


            {showType? <AccountType accountCallback={alreadyHaveAccount} typeCallback={typeCallback}/>:null}
            {showSignUp? <SignUp accountCallback={alreadyHaveAccount}/> : null}
            {showMechSign? <MechRegister accountCallback={alreadyHaveAccount}/>: null}


        </MDBBox>

     </div>
    );
};

export default SignInForm;