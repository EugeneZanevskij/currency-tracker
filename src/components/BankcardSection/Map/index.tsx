import React from "react";
import mapboxgl from "mapbox-gl";
import { getEnvVars } from "@constants/env";
import { INITIAL_MAP } from "@constants/map";
import { MapContainer } from "./styled";

class MapComponent extends React.Component {
	mapContainer: React.RefObject<HTMLDivElement>;
	map: mapboxgl.Map | null;

	constructor(props: {}) {
		super(props);
		this.mapContainer = React.createRef();
		this.map = null;
	}

	componentDidMount() {
		mapboxgl.accessToken = getEnvVars("mapboxToken");

		if (this.mapContainer.current) {
			this.map = new mapboxgl.Map({
				container: this.mapContainer.current,
				...INITIAL_MAP,
			});

			this.map.addControl(new mapboxgl.NavigationControl(), "top-left");
		}
	}

	componentWillUnmount() {
		if (this.map) {
			this.map.remove();
		}
	}

	render() {
		return <MapContainer ref={this.mapContainer} />;
	}
}

export default MapComponent;
