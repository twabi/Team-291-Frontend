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
    MDBCardTitle
    } from "mdbreact";

const AccountType = ({match}) => 
(
    <div> 
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
                                    <MDBBtn href="register/driver" color={"primary"}>GO</MDBBtn>
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
                                    <MDBBtn href="register/mechanic" color={"primary"}>GO</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </div>
);

export default AccountType;