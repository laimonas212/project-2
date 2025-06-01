import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Images from '../img/Images';

declare global {
    interface Window {
        google: any;
    }
}

const Maps_API_KEY = 'AIzaSyDLcYm1SdsbInmfKlYRrqMObUgnTXg1jXs';

const Maps: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const loadMap = () => {
            if (mapRef.current && window.google && window.google.maps) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 54.6872, lng: 25.2797 },
                    zoom: 13,
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "saturation": "0"
                                },
                                {
                                    "lightness": "30"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "30"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.province",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "20"
                                },
                                {
                                    "weight": "1.00"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "lightness": "-20"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "lightness": "-20"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "30"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "30"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "off",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                },
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "15"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "6"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "color": "#1e242b"
                                },
                                {
                                    "lightness": "30"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010306"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        }
                    ],
                });

                new window.google.maps.Marker({
                    position: { lat: 54.6872, lng: 25.2797 },
                    map: map, // ← čia esmė
                    title: "Amberweb",
                    icon: Images.amberWebLogo,
                });
            }
        };

        if (!scriptLoadedRef.current && !document.getElementById('google-maps-script')) {
            const script = document.createElement('script');
            script.id = 'google-maps-script';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${Maps_API_KEY}`;
            script.async = true;
            script.defer = true;

            script.onload = () => {
                scriptLoadedRef.current = true;
                loadMap();
            };

            script.onerror = () => {
                console.error('Google Maps API nepasikrovė.');
            };

            document.head.appendChild(script);
        } else if (window.google && window.google.maps) {
            loadMap();
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-lg shadow-xl bg-dark-surface overflow-hidden p-[1px] bg-gradient-to-r from-electric-blue/50 to-purple-500/50 h-full"
        >
            <div className="relative rounded-lg overflow-hidden h-full">
                <div ref={mapRef} className="w-full h-[400px] sm:h-full" />
            </div>
        </motion.div>
    );
};

export default Maps;
