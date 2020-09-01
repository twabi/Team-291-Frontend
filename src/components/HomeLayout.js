import React from "react";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import {
    MDBRow,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBCollapse,
    MDBContainer,
    MDBFormInline,
    MDBCardTitle,
} from "mdbreact";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Avatar } from "antd";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol } from "mdbreact";
import SampleMap from "./SampleMap";



const HomeComponent = () => {


    const Navigation = () => (
        <MDBNavbar className="bg-primary mb-2 text-white" expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <h4><strong className="text-white">QuickMechanic App</strong></h4>
                </MDBNavbarBrand>
                <MDBCollapse
                    id="navbarCollapse"
                    navbar
                >
                    <MDBNavbarNav left>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBFormInline waves>
                                <strong className="white-text mx-1">Driver's Name</strong>
                                <div className="md-form my-0 mx-1">
                                    <Avatar icon={<MDBIcon icon="user-alt" />} />
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );

    return (
        <div >
            <Navigation />
            <MDBContainer display="flex" justifyContent="center" className="mb-4">
                <MDBRow className="my-4 width">
                    <MDBCol>
                        <MDBCard className="float-left ml-5">
                            <MDBCardBody>
                                <MDBCardText>
                                    Current location : Nairobi, Kenya
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                            <MDBBtn gradient="blue" size="lg" className="float-right mr-5">
                                New Breakdown<MDBIcon icon="plus" className="ml-1"/>
                            </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow className="mt-4 ">
                    <MDBCol >
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <SampleMap/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="border-left text-center border-primary p-2">
                        <MDBCard className="p-3 my-1">

                            <h5 className="text-primary h5">Available Mechanics</h5>
                            <hr/>

                            <MDBListGroup className="h-100 mt-1">
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary justify-content-between">
                                        <p className="mb-1">Rodeo Garage</p>

                                    </div><small className="mx-4">1.5 km</small>
                                    <small className="mx-4">Rating: 3.5</small>
                                </MDBListGroupItem>
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary justify-content-between">
                                        <p className="mb-1">QuickMechanics Workshop</p>

                                    </div><small className="mx-4">2.8 km</small>
                                    <small className="mx-4">Rating: 4.6</small>
                                </MDBListGroupItem>
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary justify-content-between">
                                        <p className="mb-1">Twabi's Shop</p>

                                    </div><small className="mx-4">4.5 km</small>
                                    <small className="mx-4">Rating: 3.5</small>

                                </MDBListGroupItem>
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary justify-content-between">
                                        <p className="mb-1">The smart Garage</p>

                                    </div><small className="mx-4">5.2 km</small>
                                    <small className="mx-4">Rating: 3.0</small>

                                </MDBListGroupItem>
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary justify-content-between">
                                        <p className="mb-1">At Joe's</p>
                                    </div>
                                    <small className="mx-4">6.5 km</small>
                                    <small className="mx-4">Rating: 4.5</small>

                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
                <hr/>
                <MDBRow className="mt-4">
                    <MDBCol size="4">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Previous Breakdowns</MDBCardTitle>
                                <MDBCardText>Check the details of your previous breakdowns</MDBCardText>
                                <MDBBtn color="primary">Go</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="4">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Favorite Garages</MDBCardTitle>
                                <MDBCardText>Take a look at some of your favorite mechanics.</MDBCardText>
                                <MDBBtn color="primary">Go</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="4">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Review</MDBCardTitle>
                                <MDBCardText>Leave a review for a garage that you visited</MDBCardText>
                                <MDBBtn color="primary">Go</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </div>
    );
};

export default HomeComponent;
