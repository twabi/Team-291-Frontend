import React from "react";
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBBox,
    MDBCardTitle, MDBCardFooter
} from "mdbreact";
import car from "./mycar.svg";
import mechanic from "./mechanic.jpg";

const AccountType = (props) => {

    const handleChoice = (choice) => {
        props.typeCallback(choice);
    };

    const handleAccountExists = () => {
        props.accountCallback();

    };

    return (
        <div>

            <MDBCardTitle>
                <p className="h5 text-primary font-italic text-center font-italic py-2">choose your preferred account type</p>
            </MDBCardTitle>
            <MDBBox display="flex" justifyContent="center" alignItems="center" >


                <MDBRow className="mt-2">
                    <MDBCol className="my-3">
                        <MDBCard className="d-flex justify-content-center text-center align-items-center">

                            <img style={{width:"10rem", height:"10rem"}} src={car} className="rounded my-2" alt="aligment" />
                            <MDBCardBody>
                                <MDBCardTitle>Driver</MDBCardTitle>
                                <MDBCardText>
                                    Create an account as a driver
                                </MDBCardText>
                                <MDBBtn onClick={() => {handleChoice("Driver");}} color={"primary"}>GO</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className="my-3">
                        <MDBCard className="d-flex justify-content-center text-center align-items-center ">
                            <img style={{width:"10rem", height:"5rem"}} src={mechanic} className="rounded my-5" alt="aligment" />
                            <MDBCardBody>
                                <MDBCardTitle>Mechanic</MDBCardTitle>
                                <MDBCardText>
                                    Create an account as a mechanic
                                </MDBCardText>
                                <MDBBtn onClick={() => {handleChoice("Mechanic");}} color={"primary"}>GO</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBBox>
            <hr/>
            <div className="justify-content-center font-italic text-center text-info">
                <a onClick={handleAccountExists}>I already have an account</a>
            </div>
        </div>
    );

};

export default AccountType;