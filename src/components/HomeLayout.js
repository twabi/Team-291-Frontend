import React from "react";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import { MDBBox, MDBRow,
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBContainer, MDBFormInline,
} from "mdbreact";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";




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
                                    <Avatar icon={<UserOutlined />} />
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )

    return (
        <div >
            <Navigation />
            <MDBBox display="flex" justifyContent="center">
                <MDBRow className="my-3">
                    <MDBCol>
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBBox>

        </div>
    );
};

export default HomeComponent;
