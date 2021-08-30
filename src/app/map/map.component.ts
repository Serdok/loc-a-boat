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
      }).bindPopup('<u>Port d\'Ambonne </u> <br> <a href="https://www.bateaux.com/plaisance/port/port-ambonne-REFO2cTo6q68pA,"> <img src="assets/images/ambo.png" width="600" height="700"> </a> <br> 12 / 30 Bateaux disponibles '),
      // Cap d'Agde Port
      marker([43.272592, 3.511079], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u>Port du Cap d\'Agde  </u> <br> <a href="https://port-capdagde.com/"> <img src="assets/images/cap.png" width="600" height="700"> </a> <br> 25 / 50 Bateaux disponibles '),
      // Centre Agde Port
      marker([43.282332, 3.512708], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u> Cap Centre </u> <br> <a href="https://www.bateaux.com/plaisance/port/cap-d-agde-REFFQuuHMNz3H0"> <img src="assets/images/cen.jpg" width="600" height="700"> </a> <br> 12 / 20 Bateaux disponibles '),
      // Eden Port
      marker([43.319569, 3.555122], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u>Port Eden </u> <br> <a href="http://port-eden.fr/"> <img src="assets/images/eden.jpg" width="600" height="700"> </a> <br> 10 / 10 Bateaux disponibles '),
      // La Tamarissiere Port
      marker([43.299945, 3.461626], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u>Port de la Tamarissiere </u> <br> <a href="https://www.capdagde.com/la-tamarissiere"> <img src="assets/images/tam.jpg" width="600" height="700"> </a> <br> 12 / 20 Bateaux disponibles '),
      // Valras Port
      marker([43.248331, 3.296641], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u>Port de Valras </u> <br> <a href="https://www.ville-valrasplage.fr/"> <img src="assets/images/valras.jpg" width="600" height="700"> </a> <br> 19 / 20 Bateaux disponibles '),
      // Marseillan Port
      marker([43.352837, 3.534462], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
      }).bindPopup('<u>Port de SETE </u> <br> <a href="http://www.odyssea.eu/data/?markerID=5234"> <img src="assets/images/mar.jpg" width="600" height="700"> </a> <br> 16 / 20 Bateaux disponibles '),
       // Port de sete 
       marker([43.399485, 3.701665], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
       }).bindPopup('<u>Port de SETE </u> <br> <a href="http://www.sete.port.fr/"> <img src="assets/images/p_sete.png" width="600" height="700"> </a> <br> 51 / 70 Bateaux disponibles '),
      // Port la nouvelle 
       marker([43.016828, 3.067397], {
        icon: this.createIcon('assets/images/ancre_rouge.png')
       }).bindPopup('<u>Port La Nouvelle  </u> <br> <a href="https://portlanouvelle.fr/"> <img src="assets/images/nouv.jpg" width="600" height="700"> </a> <br> 11 / 60 Bateaux disponibles ')
   
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
      }).bindPopup(' <img src="assets/images/jissette.jpg" width="600" height="700"> <br> Nom: Gisette <br> Type: Fishing Boat <br> Nb passagers: 4/6 <br> Permis : Sans'),
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
      }).bindPopup('<img src="assets/images/gerard.jpg" width="600" height="700"> <br> Nom: Gerard <br> Type: Wakeboard/Ski Boat t <br> Nb passagers: 1/4 <br> Permis : Avec'),
      // Boat 16
      marker([43.316897, 3.663760], {
        icon: this.createIcon('assets/images/boat.png')
      }).bindPopup('<img src="assets/images/bert.jpg" width="600" height="700"> <br> Nom: Bernard <br> Type: Center Console Boat Boat <br> Nb passagers: 3/5 <br> Permis : Avec'),
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
      }).bindPopup('<img src="assets/images/gert.jpg" width="600" height="700"> <br> Nom: Gertrude <br> Type: Cabin Cruiser Boat <br> Nb passagers: 5/12 <br> Permis : Avec'),
      // Boat 20
      marker([43.276525, 3.528841], {
        icon: this.createIcon('assets/images/boat.png')
      
      })
    ];
    const delimiter = polygon([
      [43.012888, 3.036353],
      [43.009622, 3.735954],
      [43.415288, 3.729375],
      [43.413724, 3.059782]
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

}

