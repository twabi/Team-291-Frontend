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
    MDBCardTitle, MDBPopover, MDBPopoverHeader, MDBPopoverBody
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { DownOutlined } from "@ant-design/icons";
import myIcon from "../pin.png"
import mechIcon from "../mechanic.png"
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

    var map;

    // initialize map when component mounts
    React.useEffect(() => {

        try{

            navigator.geolocation.getCurrentPosition(position => {
                const userCoordinates = [position.coords.longitude, position.coords.latitude];

                map = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: userCoordinates,
                    zoom: 10,
                });


                map.on("load", function() {
                    map.loadImage(myIcon,
                        function(error, image) {
                            if (error) throw error;
                            map.addImage("myIcon-marker", image);
                    });
                    map.loadImage(
                        mechIcon,
                        function(error, image) {
                            if (error) throw error;
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
                                zoom: 14
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
                                alert("some mechanic");
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
                                    .setHTML('<h3>title</h3><p>some mechanic</p>')
                                    .addTo(map);
                                alert("your position");
                            });

                            map.on("mouseenter", "symbols", function(e) {
                                // Change the cursor style as a UI indicator.
                                map.getCanvas().style.cursor = "pointer";
                                alert("your position");

                            });

                            map.on("mouseleave", "symbols", function() {
                                map.getCanvas().style.cursor = "";
                            });

                        }
                    );
                });

            });
            return () => map.remove();
// clean up on unmount
        }catch (e) {

        }

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
        <MDBNavbar className="bg-primary mb-2 text-white pb-2" expand="md">
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
            <MDBContainer md="12" display="flex" justifyContent="center"  className="pr-5">
                <MDBRow md="12" className="my-4 vw-100 pr-5">
                    <MDBCol>
                        <MDBCard className="float-left ml-5 opacity text-white">
                            <MDBCardBody>
                                <MDBCardText>
                                    Current location : Meru, Kenya
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mr-5 pr-5">
                        <MDBBtn color={"primary"} size="lg" className="float-right">
                            New Breakdown<MDBIcon icon="plus" className="ml-1"/>
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
                <MDBRow md="12" end className="vw-100 pr-5">

                    <MDBCol  md="4" className=" mr-5 pr-5 opacity">
                        <MDBCard className="p-3 my-1">

                            <h5 className="text-primary h5">Available Mechanics</h5>
                            <hr/>

                            <MDBListGroup className="h-100 mt-1">
                                <MDBListGroupItem href="#">
                                    <div className="d-flex w-100 text-secondary bg-transparent justify-content-between">
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
                <hr className="w-100"/>
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
            <Navigation className="mb-5"/>
            <div className="map-container vh-100 mt-5" ref={mapContainerRef} />
            <FloatingObjects/>
        </div>
    );
};

export default Home;