import React from "react";
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
    MDBCardTitle, MDBInput
} from "mdbreact";
import { Tabs } from "antd";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { DownOutlined } from "@ant-design/icons";
import myIcon from "../pin.png";
import mechIcon from "../mechanic.png";
import { Avatar, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import StaticModal from "./StaticModal";

const float = styled.div`
    z-index:2;
`;

mapboxgl.accessToken = "pk.eyJ1IjoidHdhYmkiLCJhIjoiY2tlZnZyMWozMHRqdjJzb3k2YzlxZnloYSJ9.FBL3kyXAQ22kEws-y6XbJQ";

const Home = (props) => {

    var breakdownTypes = ["TIRE", "ENGINE", "FUEL", "BREAK_LIGHTS", "WARNING_LIGHTS", "SPUTTERING_ENGINE", "DEAD_BATTERY", "FLATTYRES",
        "BRAKES_SQUEAKING", "BRAKES_GRINDING", "BROKEN_MOTOR", "STEERING_WHEEL_SHAKING", "FAILED_EMISSIONS", "OVER_HEATING", "SLIPPING_TRANSMISSION", "OTHER"];

    const mapContainerRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [locationText, setLocationText] = React.useState("");
    const [modal, setModal] = React.useState(false);
    const [ setBrand] = React.useState(""); //brand 
    const [setLicensePlate] = React.useState(""); //licensePlate
    const [setComment] = React.useState("");//comment
    const [breakdowntype, setBreakdowntype] = React.useState("select breakdown type");
    const { TabPane } = Tabs;


    const handleTypeClick = (type) => {
        setBreakdowntype(type);
    };

    const getLocationNames = (lat, long) => {
        var loc = "";
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }

        })
            .then((response) => response.json())
            .then((result) => {
                var country = result.countryName;
                var sub = result.principalSubdivision;
                var lity = result.locality;

                loc = country +", "+sub + ", "+lity;
                setLocationText(loc);
                return loc;
            }).catch((error) => {
            alert("oops an error occurred: " + error + " .Try reloading your page");
        });
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

    var map;

    // initialize map when component mounts
    React.useEffect(() => {

        //if(!props.isLoggedIn){
            //window.location.href = "/";
        //}

        navigator.geolocation.getCurrentPosition((position) => {
            const userCoordinates = [position.coords.longitude, position.coords.latitude];
            getLocationNames(position.coords.latitude, position.coords.longitude);

            map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: userCoordinates,
                zoom: 10,
            });


            map.on("load", function() {
                map.loadImage(myIcon,
                    function(error, image) {
                        map.addImage("myIcon-marker", image);
                });
                map.loadImage(
                    mechIcon,
                    function(error, image) {
                        map.addImage("custom-marker", image);
                        map.addSource("points", {
                            "type": "geojson",
                            "data": {
                                "type": "FeatureCollection",
                                "features": [
                                    {
                                        "type": "Feature",
                                        "properties": {},
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": userCoordinates
                                        }
                                    }

                                ]
                            }
                        });

                        //dummy location data and mechanic locations
                        var geojson = {
                            "type": "FeatureCollection",
                            "features": [
                                {
                                    "type": "Feature",
                                    "properties": {
                                        "message": "Foo",
                                        "iconSize": [60, 60]
                                    },
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [position.coords.longitude+0.004, position.coords.latitude+0.006]
                                    }
                                },
                                {
                                    "type": "Feature",
                                    "properties": {
                                        "message": "Bar",
                                        "iconSize": [50, 50]
                                    },
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [position.coords.longitude+0.009, position.coords.latitude+0.003]
                                    }
                                },
                                {
                                    "type": "Feature",
                                    "properties": {
                                        "message": "Baz",
                                        "iconSize": [40, 40]
                                    },
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [position.coords.longitude+0.005, position.coords.latitude+0.002]
                                    }
                                }
                            ]
                        };


                        map.addSource("mechPoints", {
                            "type": "geojson",
                            "data": geojson
                        });

                        map.addLayer({
                            "id": "symbols",
                            "type": "symbol",
                            "source": "points",
                            "layout": {
                                "icon-image": "myIcon-marker"
                            }
                        });
                        map.addLayer({
                            "id": "mechSymbols",
                            "type": "symbol",
                            "source": "mechPoints",
                            "layout": {
                                "icon-image": "custom-marker"
                            }
                        });

                        map.flyTo({
                            center: userCoordinates,
                            zoom: 15
                        });

                        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
                        map.on("click", "mechSymbols", function(e) {
                            map.flyTo({
                                center: e.features[0].geometry.coordinates
                            });
                            new mapboxgl.Popup()
                                .setLngLat(e.features[0].geometry.coordinates)
                                .setHTML("<h3>title</h3><p>some mechanic</p>")
                                .addTo(map);
                            alert("some mechanic");
                        });

                        map.on("mouseenter", "mechSymbols", function() {
                            map.getCanvas().style.cursor = "pointer";
                            //alert("some mechanic");
                        });

                        map.on("mouseleave", "mechSymbols", function() {
                            map.getCanvas().style.cursor = "";
                        });

                        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
                        map.on("click", "symbols", function(e) {
                            map.flyTo({
                                center: e.features[0].geometry.coordinates
                            });
                            new mapboxgl.Popup()
                                .setLngLat(e.features[0].geometry.coordinates)
                                .setHTML("<h3>title</h3><p>some mechanic</p>")
                                .addTo(map);
                            alert("your position");
                        });

                        map.on("mouseenter", "symbols", function() {
                            // Change the cursor style as a UI indicator.
                            map.getCanvas().style.cursor = "pointer";
                            //alert("your position");

                        });

                        map.on("mouseleave", "symbols", function() {
                            map.getCanvas().style.cursor = "";
                        });

                    }
                );
            });

        });
        return () => map.remove();

    }, []);

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
        console.log(key);
    }

    const  Nav = () => (
        <div className="vw-100">
            <AppBar position="sticky" className="mb-5 vw-100 text-white">
                <Toolbar>
                    <div >
                        <Typography variant="title" color="inherit">
                            <h3 className="text-white">Quick Mechanic App</h3>
                        </Typography>
                    </div>
                    <div style={{float: "right", marginLeft: "auto", marginRight: 30 }}>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                            <div className="md-form my-0 mx-1">
                                <strong className="white-text mx-1">Driver's Name </strong>
                                <Avatar icon={<MDBIcon icon="user-alt" />} />
                                <DownOutlined className="mx-1"/>
                            </div>

                    </Dropdown></div>
                </Toolbar>
            </AppBar>

        </div>
    );

    const FloatingObjects = () => (
        <float >
            <MDBContainer md="12" display="flex" justifyContent="center"  className="pr-5 mt-5">
                <MDBRow md="12" className="my-4 vw-100 pr-5">
                    <MDBCol>
                        <MDBCard className="float-left ml-5 opacity text-white">
                            <MDBCardBody>
                                <MDBCardText>
                                    {locationText}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mr-5 pr-5">
                        <MDBBtn color={"primary"} onClick={toggle} size="lg" className="float-right">
                            New Breakdown<MDBIcon icon="plus" className="ml-1"/>
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
                <MDBRow md="12" end className="vw-100 pr-5">

                    <MDBCol  md="4" className=" mr-5 pr-5 opacity">
                        <MDBCard className="p-3 my-1">

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
        <div className="myDiv">
            <Nav/>
            <div className="map-container" ref={mapContainerRef} />
            <FloatingObjects/>
        </div>
    );
};

export default Home;