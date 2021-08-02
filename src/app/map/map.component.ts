import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {


  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 43.282566, 3.510017],
      zoom: 14
    });

    // couche de la carte 
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const icone_bateau = L.icon({
      iconUrl: "assets/img/marker-icon-yellow.png",
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [12, 38], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
    });

    
   //  premier bateau 
    const bateau_1 =  L.marker([43.279903, 3.506822] , {icon: icone_bateau})
      .bindPopup('mon bateau n°1.')
      .openPopup()
      ;
   //  premier bateau 
   const bateau_2 =  L.marker([ 43.280310, 3.506630] , {icon: icone_bateau})
   .bindPopup('mon bateau n°2.')
   .openPopup()
   ;
    const bateau_3 =  L.marker([43.279451, 3.507105] , {icon: icone_bateau})
    .bindPopup('mon bateau n°3.')
    .openPopup()
    ;
    const bateau_4 =  L.marker([43.283268, 3.512513] , {icon: icone_bateau})
    .bindPopup('mon bateau n°4.')
    .openPopup()
    ;


     
    
   // bateau et couche ajoutés a  la carte 
    tiles.addTo(this.map);
    bateau_1.addTo(this.map);
    bateau_2.addTo(this.map);
    bateau_3.addTo(this.map);
    bateau_4.addTo(this.map);
}

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}