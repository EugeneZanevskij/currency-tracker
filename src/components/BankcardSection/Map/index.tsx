import React from "react";
import mapboxgl from "mapbox-gl";
import { getEnvVars } from "@constants/env";
import { INITIAL_MAP } from "@constants/map";
import { MapContainer } from "./styled";

interface MapProps {
	banksData: {
		id: number;
		title: string;
		latitude: string;
		longitude: string;
		currencies: string[];
	}[];
}

class MapComponent extends React.Component<MapProps> {
	mapContainer: React.RefObject<HTMLDivElement>;
	map: mapboxgl.Map | null;
	markers: mapboxgl.Marker[];

	constructor(props: MapProps) {
		super(props);
		this.mapContainer = React.createRef();
		this.map = null;
		this.markers = [];
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

	componentDidUpdate(prevProps: MapProps) {
		if (prevProps.banksData !== this.props.banksData) {
			this.removeMarkers();
			this.addMarkers();
		}
	}

	addMarkers() {
		const { banksData } = this.props;

		banksData.forEach((bank) => {
			const marker = new mapboxgl.Marker()
				.setLngLat([+bank.longitude, +bank.latitude])
				.setPopup(new mapboxgl.Popup().setHTML(`<h4>${bank.title}</h4>`))
				.addTo(this.map!);

			this.markers.push(marker);
		});
	}

	removeMarkers() {
		this.markers.forEach((marker) => {
			marker.remove();
		});

		this.markers = [];
	}

	render() {
		return <MapContainer ref={this.mapContainer} />;
	}
}

export default MapComponent;
