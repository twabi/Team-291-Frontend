import React from "react";
import {MDBCol, MDBRow, MDBInput, MDBCardFooter, MDBCardText, MDBIcon} from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBBox, MDBCardTitle } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import {Input} from "antd";



const SignUpForm = (props) => {
    const [showMainContent, setShowMainContent] = React.useState(true);
    const [showDriverForm, setShowDriverForm] = React.useState(false);
    const [showMechForm, setShowMechForm] = React.useState(false);
    const [fileState, setFileState] = React.useState({});

    //handle the onclick event if one already has an account
    const handleAlreadyAccount = () => {
        //call the props function from the parent component
        props.btnCallback();
    };

    const handleMechClick = () => {
        setShowMechForm(true);
        setShowDriverForm(false);
        setShowMainContent(false);
    };

    const handleDriverClick = () => {
        setShowMechForm(false);
        setShowDriverForm(true);
        setShowMainContent(false);
    };

    const handleButton = () => {
        setShowMechForm(false);
        setShowDriverForm(false);
        setShowMainContent(true);
    };

    const handleFileUpload = e => {
        //const reader = new FileReader();
        const file = e.target.files[0];
        //reader.onloadend = () => {
            //setFileState(reader.result);
        //};
        //reader.readAsDataURL(file);
        setFileState(file);
        console.log(file);
    };

    const MechanicForm = () => (
        <div className="background">
            <MDBBtn color="cyan"
                    onClick={handleButton}
                    className="text-white float-lg-right mr-5" type="submit">
                Back
            </MDBBtn>

            <MDBBox display="flex" className="w-100" justifyContent="center" >
                <MDBCol className="my-5 w-100" md="5">
                    <MDBCard className="w-100">
                        <MDBCardBody>
                            <h4 className="text-center text-primary">QuickMechanic App</h4>
                            <hr/>
                            <MDBCardTitle><p className="h5 text-primary text-center font-italic py-2">Create A Mechanic account</p></MDBCardTitle>
                            <form className="p-4 mt-4">
                                <div className="md-form d-flex flex-column justify-content-center align-items-center my-0 mx-1">
                                    <Input type="file"
                                           style={{ width: "50%" }}
                                           accept="image/*"
                                           onChange={handleFileUpload}
                                           size="large"
                                           placeholder="Select profile Image" prefix={<MDBIcon icon="user-plus"/>} />
                                    <p className="font-italic">{fileState.name}</p>
                                </div>
                                <MDBInput
                                    label="enter your user name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your phone number"
                                    icon="phone-alt"
                                    group
                                    type="number"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your garage name"
                                    icon="building"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your garage location e.g City, Area"
                                    icon="map-marker-alt"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter your preferred password"
                                    icon="key"
                                    group
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
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <div className="text-center py-4 mt-5">
                                    <MDBBtn color="primary" className="text-white">
                                        Sign Up
                                    </MDBBtn>

                                </div>
                            </form>


                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <a onClick={handleAlreadyAccount}>I already have an account</a>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>

                </MDBCol>


            </MDBBox>
        </div>
    )


    const DriverForm = () => (
        <div className="background">
            <MDBBtn color="cyan"
                    onClick={handleButton}
                    className="text-white float-lg-right mr-5" type="submit">
                Back
            </MDBBtn>

            <MDBBox display="flex" className="w-100" justifyContent="center" >
                <MDBCol className="my-5 w-100" md="5">
                    <MDBCard className="w-100" >
                        <MDBCardBody>
                            <h4 className="text-center text-primary">QuickMechanic App</h4>
                            <hr/>
                            <MDBCardTitle><p className="h5 text-primary text-center font-italic py-2">Create A Driver account</p></MDBCardTitle>
                            <form className="p-4 mt-4">

                                <div className="grey-text mx-2">
                                    <div className="md-form d-flex flex-column justify-content-center align-items-center my-0 mx-1">
                                        <Input type="file"
                                               style={{ width: '50%' }}
                                               accept="image/*"
                                               onChange={handleFileUpload}
                                               size="large"
                                               placeholder="Select Image" prefix={<MDBIcon icon="user-plus"/>} />
                                        <p className="font-italic">{fileState.name}</p>
                                    </div>
                                    <MDBInput
                                        label="enter your user name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="enter your phone number"
                                        icon="phone-alt"
                                        group
                                        type="number"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="enter your preferred password"
                                        icon="key"
                                        group
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
                                        validate
                                        error="wrong"
                                        success="right"
                                    />

                                </div>
                                <div className="text-center py-4 mt-5">
                                    <MDBBtn color="primary" className="text-white">
                                        Sign Up
                                    </MDBBtn>

                                </div>
                            </form>


                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <a onClick={handleAlreadyAccount}>I already have an account</a>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>

                </MDBCol>


            </MDBBox>
        </div>

    )

    return (
        <div >
            {showMainContent ? <div>

                <h3 className="text-primary mt-5 text-center">Choose Account Type</h3>
                <MDBBox display="flex" justifyContent="center" alignItems="center" >
                    <MDBRow className="mt-5">
                        <MDBCol md="6" className="my-3">
                            <MDBCard className="d-flex justify-content-center align-items-center"  style={{ width: "22rem" }}>

                                <MDBIcon far icon="id-card" className="mt-3 indigo-text" size="8x"/>
                                <MDBCardBody>
                                    <MDBCardTitle>Driver</MDBCardTitle>
                                    <MDBCardText>
                                        Create an account as a driver
                                    </MDBCardText>
                                    <MDBBtn color={"primary"} onClick={handleDriverClick}>GO</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="6" className="my-3">
                            <MDBCard className="d-flex justify-content-center align-items-center " style={{ width: "22rem" }}>
                                <MDBIcon icon="tools" className="mt-3 indigo-text" size="8x"/>
                                <MDBCardBody>
                                    <MDBCardTitle>Mechanic</MDBCardTitle>
                                    <MDBCardText>
                                        Create an account as a mechanic
                                    </MDBCardText>
                                    <MDBBtn color={"primary"} onClick={handleMechClick}>GO</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>

            </div>:null}

            {showDriverForm? <DriverForm/> : null}
            {showMechForm? <MechanicForm/>: null}
        </div>


    );
};

export default SignUpForm;
