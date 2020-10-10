import React from "react";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBBox,
    MDBCardTitle, MDBIcon, MDBCard,
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import AccountType from "./AccountType";
import SignUp from "./SignUp";
import MechRegister from "./Mechregister";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import logoImage from "../tools.png";

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
    const [accountType, setAccountType] = React.useState("");
    const [menuHolder, setMenuHolder] = React.useState("Select your user type");

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
    var token = "undefined";
    var logged  = false;
    const auntheticate = (username, password) => {

        let requestBody = {};
        if(accountType === "Driver"){
            requestBody = {
                query:`
               query {
                  loginDriver(email: "${username}", password: "${password}"){
                    token
                    driverId
                    accountType
                    fullName
                  }
                }
                `
            };


        } else if (accountType === "Mechanic"){

            requestBody = {
                query:`
               query {
                  loginMechanic(email: "${username}", password: "${password}"){
                    token
                    mechanicId
                    tokenExpiration
                    accountType
                    fullName
                  }
                }
                `
            };

        } else {
            alert("account type is empty");
        }


        fetch("https://secret-citadel-57463.herokuapp.com/graphql", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers:{
                "content-type":"application/json",

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
                props.getLoggedInData(resData.data, logged, accountType);
            })
            .catch((error) => {
                setShowLoading(false);
                alert("Oops! an error occurred : " + error);
            });
    };

    const login = () => {
        if(userName === "" || password === "" || accountType === ""){
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

    const handleMenuClick = (e) => {
        //message.info('Click on menu item.');
        //console.log('click', e.item.props.children[1]);
        setAccountType(e.item.props.children[1]);
        setMenuHolder(e.item.props.children[1]);

    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                Driver
            </Menu.Item>
            <Menu.Item key="2">
                Mechanic
            </Menu.Item>
        </Menu>
    );


    return (
        <div>

                {showLogin ?
                    <MDBBox display="flex" justifyContent="center">
                    <MDBCol>
                        <img style={{width:"5rem", height:"6rem"}} src={logoImage} className="rounded mx-auto d-block" alt="alignment" />
                        <MDBCardTitle><p className="h5 text-primary font-italic text-center py-2">Login</p></MDBCardTitle>
                        {showError ? <p className="red-text my-2 text-center">{errorMessage}</p> : null}
                        <form className={"mt-1"}>
                            <div className="grey-text">
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

                                <div className="d-flex flex-row w-100 justify-content-center">
                                    <MDBIcon icon="user-circle mr-2" className="blue-text icon"/>
                                    <Dropdown overlay={menu} className="w-100">
                                        <Button>
                                            {menuHolder} <DownOutlined />
                                        </Button>
                                    </Dropdown>
                                </div>




                            </div>
                            <div className="text-center py-2">
                                <MDBRow className="d-flex flex-row justify-content-center align-content-center">
                                    <MDBCol md="6" >

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="defaultChecked2"/>
                                            <label className="custom-control-label text-primary font-weight-bold" htmlFor="defaultChecked2">
                                                Remember Me </label>
                                        </div>

                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBBtn onClick={login} color="primary">
                                            login
                                            {showLoading ? <div className="spinner-border ml-2 spinner-border-sm" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div> : null}
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>


                            </div>

                        </form>
                        <div className="text-center d-flex flex-column font-italic text-primary font-weight-bold mt-1">
                            <a onClick={handleNoAccount}>I don't have an account</a>
                            <a href="https://assistant.google.com/services/invoke/uid/0000002b95f10945?hl=en">
                                🅖 Ask my test app to help me out
                            </a>
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