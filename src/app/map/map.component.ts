import { Component, OnInit } from '@angular/core';
import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import { Icon, icon, latLng, Layer, MapOptions, marker, polygon, tileLayer } from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  options: MapOptions = null;
  control: LeafletControlLayersConfig = null;
  markers: Layer[] = null;

  constructor() {
  }

  ngOnInit(): void {
    const ports = [
      // Ambonne Port
      marker([43.294893, 3.523555], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // Cap d'Agde Port
      marker([43.272592, 3.511079], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // Centre Agde Port
      marker([43.282332, 3.512708], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // Eden Port
      marker([43.319569, 3.555122], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // La Tamarissiere Port
      marker([43.299945, 3.461626], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // Valras Port
      marker([43.248331, 3.296641], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
      // Marseillan Port
      marker([43.352837, 3.534462], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }),
    ];
    const boats = [
      // Boat 1
      marker([43.348575, 3.541573], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 2
      marker([43.314913, 3.559857], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 3
      marker([43.291111, 3.546781], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 4
      marker([43.283799, 3.511371], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 5
      marker([43.279410, 3.507019], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 6
      marker([43.272729, 3.522354], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 7
      marker([43.262894, 3.494416], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 8
      marker([43.271892, 3.486497], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 9
      marker([43.272026, 3.497034], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 10
      marker([43.285090, 3.543280], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 11
      marker([43.241861, 3.316426], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 12
      marker([43.259595, 3.374321], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 13
      marker([43.260777, 3.436003], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 14
      marker([43.260777, 3.436003], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 15
      marker([43.397352, 3.637822], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 16
      marker([43.316897, 3.663760], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 17
      marker([43.194441, 3.520051], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 18
      marker([43.239281, 3.452131], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 19
      marker([43.325955, 3.643907], {
        icon: this.createIcon('assets/images/boat.png')
      }),
      // Boat 20
      marker([43.276525, 3.528841], {
        icon: this.createIcon('assets/images/boat.png')
      }),
    ];
    const delimiter = polygon([
      [43.115759, 3.089046],
      [43.074472, 3.735029],
      [43.415288, 3.729375],
      [43.414262, 3.204955]
    ]);

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: `&copy; Contributeurs d\'<a href="https://openstreetmap.org/copyright">OSM</a> - <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>`
        })
      ],
      center: latLng(43.282566, 3.510017),
      zoom: 13,
      zoomControl: true,
    };
    this.control = {
      baseLayers: {
        'Open Street Map': tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; Contributeurs d\'<a href="https://openstreetmap.org/copyright">OSM</a> - <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>'
        })
      },
      overlays: {
        Satellite: tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 19
        })
      }
    };
    this.markers = [
      ...ports,
      ...boats,
      delimiter,
    ];
  }

  private createIcon(path: string): Icon {
    return icon({
      iconUrl: path,
      iconSize: [38, 38]
    });
  }

  // fromJavascript(): void {
  //
  //   // CARTES
  //
  //   // Création de la carte
  //   const map = L.map('map', {
  //     zoomControl: false,
  //     fullscreenControl: true,
  //   }).setView([43.282566, 3.510017], 13);
  //
  //
  //   const OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '&copy; Contributeurs d\'<a href="http://openstreetmap.org/copyright">OSM</a> - <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>'
  //   });
  //
  //   const Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  //     maxZoom: 19
  //   });
  //
  //   // ajout de la couche osm
  //   map.addLayer(OpenStreetMap);
  //
  //   // création marqueur  port
  //   const Marker_port = L.icon({
  //     iconUrl: 'assets/images/ancre_rouge.png',
  //     iconSize: [38, 38]
  //
  //   });
  //   // création marqueur bateau
  //   const Marker_bateau = L.icon({
  //     iconUrl: 'assets/images/boat.png',
  //     iconSize: [38, 38]
  //   });
  //
  //
  //   // Liste des ports
  //   L.marker([43.294893, 3.523555], {icon: Marker_port})
  //     .addTo(map)
  //     .bindPopup(
  //       'Port d\'AMBONNE\''
  //     );
  //
  //   L.marker([43.272592, 3.511079], {icon: Marker_port})
  //     .addTo(map)
  //     .bindPopup(
  //       'Port de AGDE: Cap d\'AGDE '
  //     );
  //
  //   L.marker([43.282332, 3.512708], {icon: Marker_port})
  //     .addTo(map)
  //     .bindPopup(
  //       'Port de AGDE: Centre port'
  //     );
  //
  //   L.marker([43.319569, 3.555122], {icon: Marker_port})
  //     .addTo(map)
  //     .bindPopup(
  //       'Port EDEN  '
  //     );
  //
  //   L.marker([43.299945, 3.461626], {icon: Marker_port})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'Port de la Tamarissière ');
  //   L.marker([43.248331, 3.296641], {icon: Marker_port})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'Port de Valras');
  //   L.marker([43.352837, 3.534462], {icon: Marker_port})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'Port de MARSEILLAN ');
  //
  //
  //   // Liste des bateaux
  //
  //   L.marker([43.348575, 3.541573], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.314913, 3.559857], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.291111, 3.546781], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.283799, 3.511371], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.279410, 3.507019], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.272729, 3.522354], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.262894, 3.494416], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.271892, 3.486497], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.272026, 3.497034], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.285090, 3.543280], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.241861, 3.316426], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.259595, 3.374321], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.260777, 3.436003], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.260777, 3.436003], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.397352, 3.637822], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.316897, 3.663760], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.194441, 3.520051], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.239281, 3.452131], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.325955, 3.643907], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...');
  //   L.marker([43.276525, 3.528841], {icon: Marker_bateau})
  //
  //     .addTo(map)
  //
  //     .bindPopup(
  //       'bateau n°...'
  //     );
  //
  //
  //   // delimitation
  //
  //
  //   const polygon = L.polygon([
  //     [43.115759, 3.089046],
  //     [43.074472, 3.735029],
  //     [43.415288, 3.729375],
  //     [43.414262, 3.204955]
  //
  //   ]).addTo(map);
  //
  //
  // }
}

