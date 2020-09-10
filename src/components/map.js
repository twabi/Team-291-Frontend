import React from "react";
import myIcon from "../pin.png";
import mechIcon from "../mechanic.png";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = "pk.eyJ1IjoidHdhYmkiLCJhIjoiY2tlZnZyMWozMHRqdjJzb3k2YzlxZnloYSJ9.FBL3kyXAQ22kEws-y6XbJQ";

const Map = () => {

    const mapContainerRef = React.useRef(null);
    const [locationText, setLocationText] = React.useState("");

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

    var map;

    // initialize map when component mounts
    React.useEffect(() => {

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

                        map.addLayer({
                            "id": "symbols",
                            "type": "symbol",
                            "source": "points",
                            "layout": {
                                "icon-image": "myIcon-marker"
                            }
                        });

                        map.flyTo({
                            center: userCoordinates,
                            zoom: 14
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

    }, []);

    return (
        <div className="map-container vh-90" ref={mapContainerRef} />
    );
};

export default Map;