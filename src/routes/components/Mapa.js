import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Defina o ícone personalizado
const customIcon = L.icon({
    iconUrl: 'custom_marker.png', // Caminho relativo ao diretório 'public'
    iconSize: [40, 40],           // Tamanho do ícone
    iconAnchor: [20, 40],         // Ponto de ancoragem do ícone
    popupAnchor: [0, -40]         // Ponto de ancoragem do popup
});

const Mapa = () => {
    return (
        <div style={{ height: '300px', width: '80%', borderRadius: '5px', overflow: 'hidden', border: '2px solid #fff' }}>
            <MapContainer
                center={[-23.66273574343251, -46.72908074933336]}
                zoom={9}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={19}
                />
                <Marker position={[-23.66273574343251, -46.72908074933336]} icon={customIcon}>
                    <Popup>São Paulo</Popup>
                </Marker>
                <Marker position={[-23.51116675550386, -46.87614248383648]} icon={customIcon}>
                    <Popup>Barueri</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapa;
