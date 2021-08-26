import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { turf } from 'turf';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


 
  constructor() { }

  ngOnInit(): void {
    this.fromJavascript();
  }

  fromJavascript(): void {

		// CARTES
		
		// Création de la carte
		var  map = L.map('map', {
			zoomControl: false,
			fullscreenControl: true,
			}).setView([ 43.282566, 3.510017], 13)


		let OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; Contributeurs d\'<a href="http://openstreetmap.org/copyright">OSM</a> - <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>'
			})

		let Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			maxZoom: 19
		})
	
		// ajout de la couche osm
		map.addLayer(OpenStreetMap);

		// création marqueur  port
		var Marker_port = L.icon({
			iconUrl:'assets/img/ancre_rouge.png',
			iconSize:     [38, 38]
			
		});
		// création marqueur bateau 
		var Marker_bateau = L.icon({
			iconUrl: 'assets/img/boat.png',
			iconSize:     [38, 38]
		});

		
		// Liste des ports 
		L.marker([43.294893, 3.523555], {icon: Marker_port}).addTo(map).bindPopup("Port d'AMBONNE'");
		L.marker([43.272592, 3.511079], {icon: Marker_port}).addTo(map).bindPopup("Port de AGDE: Cap d'AGDE ");
		L.marker([43.282332, 3.512708], {icon: Marker_port}).addTo(map).bindPopup("Port de AGDE: Centre port");
		L.marker([43.319569, 3.555122], {icon: Marker_port}).addTo(map).bindPopup("Port EDEN  ");
		L.marker([43.299945, 3.461626], {icon: Marker_port}).addTo(map).bindPopup("Port de la Tamarissière ");
		L.marker([43.248331, 3.296641], {icon: Marker_port}).addTo(map).bindPopup("Port de Valras");
		L.marker([43.352837, 3.534462], {icon: Marker_port}).addTo(map).bindPopup("Port de MARSEILLAN ");

		// Liste des bateaux

		L.marker([43.348575, 3.541573], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.314913, 3.559857], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.291111, 3.546781], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.283799, 3.511371], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.279410, 3.507019], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.272729, 3.522354], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.262894, 3.494416], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.271892, 3.486497], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.272026, 3.497034], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.285090, 3.543280], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.241861, 3.316426], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.259595, 3.374321], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.260777, 3.436003], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.260777, 3.436003], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.397352, 3.637822], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.316897, 3.663760], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.194441, 3.520051], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.239281, 3.452131], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.325955, 3.643907], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		L.marker([43.276525, 3.528841], {icon: Marker_bateau}).addTo(map).bindPopup("bateau n°...");
		
	
		// delimitation


		var polygon = L.polygon([
			[43.115759, 3.089046],
			[43.074472, 3.735029],
			[43.415288, 3.729375],
			[43.414262, 3.204955]
			
		]).addTo(map);



	
	}
}

