import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography, Marker,
    ZoomableGroup
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleMoveEnd(position) {
        setPosition(position);
    }

    return (
        <ComposableMap
            projectionConfig={{
                scale: 900
            }}
            >
            <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey}
                                       fill="#DDD"
                                       stroke="#FFF"
                                       geography={geo} />
                        ))
                    }
                </Geographies>
                <Marker coordinates={[1.2921, 36.8219]}>
                    <circle r={8} fill="#F53" />
                </Marker>
                <Marker coordinates={[1.2921, 45.7128]}>
                    <circle r={8} fill="#F53" />
                </Marker>
                <Marker coordinates={[1.2921, 37.7128]}>
                    <circle r={8} fill="#F53" />
                </Marker>
                <Marker coordinates={[1.2921, 30.7128]}>
                    <circle r={8} fill="#F53" />
                </Marker>
                <Marker coordinates={[1.2921, 40.7128]}>
                    <circle r={8} fill="#F53" />
                </Marker>

            </ZoomableGroup>

        </ComposableMap>
    );
};

export default MapChart;
