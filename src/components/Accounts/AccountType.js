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
import mechanic from "./mechanic.jpg"

const AccountType = (props) => {

    const handleChoice = (choice) => {
        props.typeCallback(choice);
    };

    const handleAccountExists = () => {
        props.accountCallback();
    };

    return (
        <div>

            <MDBBox display="flex" justifyContent="center" alignItems="center" >

                    <MDBCard className="w-100 my-3">
                        <MDBCardBody>
                            <h4 className="text-primary mt-5 text-center font-weight-bold">Choose Account Type</h4>
                            <hr/>
                            <MDBCardTitle>
                                <p className="h5 text-primary font-italic text-center font-italic py-2">choose your preferred account type</p>
                            </MDBCardTitle>
                            <MDBRow className="mt-2">
                                <MDBCol md="6" className="my-3">
                                    <MDBCard style={{height:"20rem"}} className="d-flex justify-content-center text-center align-items-center"  style={{ width: "16rem" }}>

                                        <img style={{width:"15rem", height:"15rem"}} src={car} className="rounded my-2" alt="aligment" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Driver</MDBCardTitle>
                                            <MDBCardText>
                                                Create an account as a driver
                                            </MDBCardText>
                                            <MDBBtn onClick={()=>{handleChoice("Driver")}} color={"primary"}>GO</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="6" className="my-3">
                                    <MDBCard style={{height:"20rem"}} className="d-flex justify-content-center text-center align-items-center " style={{ width: "16rem" }}>
                                        <img style={{width:"15rem", height:"10rem"}} src={mechanic} className="rounded my-5" alt="aligment" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Mechanic</MDBCardTitle>
                                            <MDBCardText>
                                                Create an account as a mechanic
                                            </MDBCardText>
                                            <MDBBtn onClick={()=>{handleChoice("Mechanic")}} color={"primary"}>GO</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <p onClick={handleAccountExists}>I already have an account</p>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>

            </MDBBox>
        </div>
    );

}

export default AccountType;