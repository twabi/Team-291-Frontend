//Home Component
import React, {useState, useRef} from "react";
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
    MDBCardTitle, 
    MDBInput,
    MDBDropdown, 
    MDBDropdownToggle, 
    MDBDropdownMenu, 
    MDBDropdownItem,
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter
} from "mdbreact";
import { Tabs } from "antd";
import "mdbreact/dist/css/mdb.css";
import { DownOutlined, WindowsFilled } from "@ant-design/icons";
import { Avatar, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Modal from "react-bootstrap/Modal";
import SignIn from "./Accounts/SignIn";
import Map from "./map";


const float = styled.div`
    z-index: 2;
`;

const Home = (props) => {

    var breakdownTypes = ["TIRE", "ENGINE", "FUEL", "BREAK_LIGHTS", "WARNING_LIGHTS", "SPUTTERING_ENGINE", "DEAD_BATTERY", "FLATTYRES",
        "BRAKES_SQUEAKING", "BRAKES_GRINDING", "BROKEN_MOTOR", "STEERING_WHEEL_SHAKING", "FAILED_EMISSIONS", "OVER_HEATING", "SLIPPING_TRANSMISSION", "OTHER"];

    const mapContainerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [locationText, setLocationText] = useState("");
    const [modal, setModal] = useState(false);
    const [brand, setBrand] = useState(""); //brand removed 
    const [licensePlate, setLicensePlate] = useState(""); //licensePlate removed
    const [comment, setComment] = useState("");//comment removed
    const [breakdowntype, setBreakdowntype] = useState("select breakdown type");
    const { TabPane } = Tabs;
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInMech, setLoggedInMech] = React.useState(false);
    const [loggedInDriver, setLoggedInDriver] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleTypeClick = (type) => {
        setBreakdowntype(type);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const handleSubmitReport = () => {
        toggle();
        var licensePlate = document.getElementById("license").value;
        var brand = document.getElementById("brand").value;
        var comment = document.getElementById("comment").value;
        //alert("report sent successfully");
        setLicensePlate(licensePlate);
        setBrand(brand);
        setComment(comment);
    };

    const handleMenuClick = () => {

    };

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const handleLogOut = () => {
        //props.logout();
        window.location = "/";
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Account Settings</Menu.Item>
            <Menu.Item onClick={handleLogOut} key="2">Log Out</Menu.Item>
        </Menu>
    );

    function callback(key) {
        //console.log(key);
    }

    const showPopUp = () => {
        setShow(true);
    };

    const getLocationName = (locationText) => {
        setLocationText(locationText);
    };


    const getLoggedInData = (user, isLoggedIn, accountType) => {
        //console.log(user);
        //console.log(isLoggedIn);
        setIsLoggedIn(isLoggedIn);

        if(user !== null || isLoggedIn !== false){

            if(accountType === "Driver"){
                setLoggedInUser(user.loginDriver);
                setLoggedInDriver(true);
                handleClose();
                setShowOthers(true);
            }
            else {
                setLoggedInUser(user.loginMechanic);
                setLoggedInMech(true);
                handleClose();
                setShowOthers(true);
            }

        }

    };

    const Mode = () => (
        <>
            <Modal
                show={show}
                backdrop="static"
                centered={true}
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title className="text-primary">QuickMechanic App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignIn getLoggedInData={getLoggedInData}/>
                </Modal.Body>
            </Modal>
        </>
    );

    const  Nav = () => (
        <div className="vw-100">
            <AppBar position="sticky" className="mb-5 vw-100 primary-color text-white">
                <Toolbar variant="dense">
                    <div>
                        <Typography variant="title" color="inherit">
                            <h4 className="text-white">Quick Mechanic App</h4>
                        </Typography>
                    </div>
                    <div style={{float: "right", marginLeft: "auto", marginRight: 30 }}>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                            <div className="md-form my-0 mx-1">
                                <strong className="white-text mr-2">{loggedInUser.fullName}</strong>
                                <Avatar icon={<MDBIcon icon="user-alt" />} />
                                <DownOutlined className="mx-1"/>
                            </div>

                    </Dropdown></div>
                </Toolbar>
            </AppBar>

        </div>
    );

    const Mechanic = () => (
        <div style={{zIndex: 2}} >
            <MDBContainer display="flex" justifyContent="center"  className="mt-5">
                <MDBRow className="my-4">
                    <MDBCol>
                        <MDBCard className="float-left opacity-90 text-white">
                            <MDBCardBody>
                                <MDBCardText>
                                    {locationText}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow md="12" end className="">

                    <MDBCol  md="4" className="opacity-90">
                        <MDBCard className="p-3 my-1 float-right">

                            <Tabs onChange={callback} type="card">
                                <TabPane tab="Incoming Requests" key="1">
                                    <MDBListGroup className="h-100 mt-1">
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary bg-transparent justify-content-between">
                                                <p className="mb-1">Rodeo George</p>
                                                <small className="mx-1">1.5 km</small>
                                                <small className="mx-1">Flat Tyre</small>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">Moses Prague</p>
                                                <small className="mx-4">2.8 km</small>
                                                <small className="mx-4">Break Lights</small>
                                            </div>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </TabPane>
                                <TabPane tab="Reviews" key="2">
                                    <MDBCard className="opacity">
                                        <MDBCardBody>
                                            <MDBCardTitle>Customer Reviews</MDBCardTitle>
                                            <MDBCardText>Reviews about your garage.</MDBCardText>
                                            <MDBBtn color="primary">Go</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </TabPane>
                                <TabPane tab="History" key="3">
                                <MDBListGroup className="h-100 mt-1">
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary bg-transparent justify-content-between">
                                                <p className="mb-1">Rodeo George</p>
                                                <small className="mx-1">17th-06-2020</small>
                                                <small className="mx-1">Flat Tyre</small>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">Moses Prague</p>
                                                <small className="mx-4">28th-06-2020</small>
                                                <small className="mx-4">Break Lights</small>
                                            </div>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </TabPane>
                            </Tabs>

                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    );


    const FloatingObjects = () => (
        <float >
            <MDBContainer display="flex" justifyContent="center"  className="mt-5">
                <MDBRow className="my-4">
                    <MDBCol>
                        <MDBCard className="float-left opacity-90 text-white">
                            <MDBCardBody>
                                <MDBCardText>
                                    {locationText}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn color={"primary"} onClick={toggle} size="lg" className="float-right">
                            New Breakdown<MDBIcon icon="plus" className="ml-1"/>
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
                <MDBRow md="12" end className="">

                    <MDBCol  md="4" className="opacity-90">
                        <MDBCard className="p-3 my-1 float-right">

                            <Tabs onChange={callback} type="card">
                                <TabPane tab="Nearby-Garages" key="1">
                                    <MDBListGroup className="h-100 mt-1">
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary bg-transparent justify-content-between">
                                                <p className="mb-1">Rodeo Garage</p>
                                                <small className="mx-1">1.5 km</small>
                                                <small className="mx-1">Rating: 3.5</small>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">QuickMechanics Workshop</p>
                                                <small className="mx-4">2.8 km</small>
                                                <small className="mx-4">Rating: 4.6</small>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">Twabi's Shop</p>
                                                <small className="mx-4">4.5 km</small>
                                                <small className="mx-4">Rating: 3.5</small>
                                            </div>

                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">The smart Garage</p>
                                                <small className="mx-4">5.2 km</small>
                                                <small className="mx-4">Rating: 3.0</small>
                                            </div>

                                        </MDBListGroupItem>
                                        <MDBListGroupItem href="#">
                                            <div className="d-flex w-100 text-secondary justify-content-between">
                                                <p className="mb-1">At Joe's</p>
                                                <small className="mx-4">6.5 km</small>
                                                <small className="mx-4">Rating: 4.5</small>
                                            </div>


                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </TabPane>
                                <TabPane tab="Favorites" key="2">
                                    <MDBCard className="opacity">
                                        <MDBCardBody>
                                            <MDBCardTitle>Favorite Garages</MDBCardTitle>
                                            <MDBCardText>Some of your favorite mechanics.</MDBCardText>
                                            <MDBBtn color="primary">Go</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </TabPane>
                                <TabPane tab="Reviews" key="3">
                                    <MDBCard className="opacity">
                                        <MDBCardBody>
                                            <MDBCardTitle>Review</MDBCardTitle>
                                            <MDBCardText>Leave a review for a garage that you visited</MDBCardText>
                                            <MDBBtn color="primary">Go</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </TabPane>
                            </Tabs>

                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBModal isOpen={modal} toggle={toggle} size="sm" centered>
                        <MDBModalHeader toggle={toggle}>New Breakdown</MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <MDBDropdown className="w-100">
                                    <MDBDropdownToggle caret color="primary">
                                        {breakdowntype}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="myDrop">
                                        {breakdownTypes.map((type) => (
                                            <MDBDropdownItem onClick={() => {handleTypeClick(type);}}>{type}</MDBDropdownItem>
                                        ))}

                                    </MDBDropdownMenu>
                                </MDBDropdown>

                                <MDBInput
                                    label="enter vehicle license plate (for easy identification)"
                                    group
                                    type="text"
                                    id="license"
                                    validate
                                    outline
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="enter vehicle brand and color"
                                    group
                                    type="text"
                                    outline
                                    id="brand"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="Any other comment's on the problem"
                                    group
                                    outline
                                    type="text"
                                    validate
                                    id="comment"
                                    error="wrong"
                                    success="right"
                                />
                            </form>

                        </MDBModalBody>
                        <MDBModalFooter className="text-center d-flex justify-content-center">
                            <MDBBtn color="deep-purple" className="text-white" onClick={toggle}>Close</MDBBtn>
                            <MDBBtn color="primary" onClick={handleSubmitReport}>Report</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>

            </MDBContainer>

        </float>
    );

    return (
        <div>
            <div className="myDiv">
                {showOthers ? <Nav/> : null}
                <Map popupCallBack={showPopUp} getLocation={getLocationName}/>
                {show ? <Mode/> : null}
                {showOthers && loggedInMech? <Mechanic/> : null}
                {showOthers && loggedInDriver? <FloatingObjects/> : null}
            </div>

        </div>

    );
};

export default Home;