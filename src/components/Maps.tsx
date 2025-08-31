import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Images from "../img/Images";

const Maps: React.FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstance = useRef<L.Map | null>(null);

	useEffect(() => {
		// Load the map only once
		if (!mapInstance.current && mapRef.current) {
			// Initialize the map and set its view to the specified coordinates and zoom level
			const map = L.map(mapRef.current, {
				zoomControl: false, // Disable default Leaflet zoom control to add a custom one
			}).setView([54.6872, 25.2797], 13);

			mapInstance.current = map;

			// Add a dark-themed tile layer.
			// This is equivalent to the styled map in your Google Maps code.
			L.tileLayer(
				"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				}
			).addTo(map);

			// Create a custom icon for the marker using your logo
			const customIcon = L.icon({
				iconUrl: Images.amberWebLogo,
				iconSize: [40, 40], // size of the icon
				iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
			});

			// Add a marker to the map with the custom icon
			L.marker([54.6872, 25.2797], { icon: customIcon })
				.addTo(map)
				.bindPopup(
					"Amberweb - Profesionalus Interneto Svetainių Kūrimas"
				);

			// Add a custom zoom control
			L.control
				.zoom({
					position: "bottomright",
				})
				.addTo(map);
		}

		return () => {
			if (mapInstance.current) {
				mapInstance.current.remove();
				mapInstance.current = null;
			}
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			className="relative rounded-lg shadow-xl bg-dark-surface overflow-hidden p-[1px] bg-gradient-to-r from-electric-blue/50 to-purple-500/50 h-full"
		>
			<div className="relative rounded-lg overflow-hidden h-full">
				{/* The map container now needs a specific ID for Leaflet to target */}
				<div
					id="map-container"
					ref={mapRef}
					className="w-full h-[400px] sm:h-full"
				/>
			</div>
		</motion.div>
	);
};

export default Maps;
