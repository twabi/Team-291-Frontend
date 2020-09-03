import React, {Fragment} from "react";
import {
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardTitle
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { DownOutlined } from "@ant-design/icons";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBCollapse,
    MDBFormInline,
} from "mdbreact";
import { Avatar, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";

const float = styled.div`
    z-index:2;
`;

mapboxgl.accessToken = "pk.eyJ1IjoidHdhYmkiLCJhIjoiY2tlZnZyMWozMHRqdjJzb3k2YzlxZnloYSJ9.FBL3kyXAQ22kEws-y6XbJQ";

const Home = () => {

    const mapContainerRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    // initialize map when component mounts
    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [37.6456, 0.0515],
            zoom: 13.5,
        });

        // add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleMenuClick = () => {

    };

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const handleLogOut = () => {
        //props.logout();
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Account Settings</Menu.Item>
            <Menu.Item onClick={handleLogOut} key="2">Log Out</Menu.Item>
        </Menu>
    );

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
                                <Dropdown
                                    overlay={menu}
                                    onVisibleChange={handleVisibleChange}
                                    visible={visible}
                                >

                                    <div className="md-form my-0 mx-1">
                                        <strong className="white-text mx-1">Driver's Name </strong>
                                        <Avatar icon={<MDBIcon icon="user-alt" />} />
                                        <DownOutlined className="mx-1"/>
                                    </div>

                                </Dropdown>

                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );

    const FloatingObjects = () => (
        <float >
            <MDBContainer display="flex" justifyContent="center" className="mb-4">
                <MDBRow className="my-4 width">
                    <MDBCol>
                        <MDBCard className="float-left ml-5">
                            <MDBCardBody>
                                <MDBCardText>
                                    Current location : Meru, Kenya
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
                <MDBRow className="mt-4 ">
                    <MDBCol md="4">
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

        </float>
    );

    return (
        <div>
            <Navigation/>
            <div className="map-container vh-100 mt-5" ref={mapContainerRef} />
            <FloatingObjects />
        </div>
    );
};

export default Home;