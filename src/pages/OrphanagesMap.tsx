import React from 'react';

import mapmarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

const OrphanageMap = () => {
    return <div id='page-map'>
        <aside>
            <header>
         <img src={mapmarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Parelheiros</strong>
                <span>São Paulo</span>
            </footer>
        </aside>
         <Map 
            center={[-23.7776991,-46.7188515]}
            zoom ={15}
            style={{width:'100%' , height:'100%'}}
         ><TileLayer
          url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
           /></Map>
    
    <Link to='' className='create-orphanage' >
    <FiPlus size={32} color='#fff' />
    </Link>
    </div>
}

export default OrphanageMap;