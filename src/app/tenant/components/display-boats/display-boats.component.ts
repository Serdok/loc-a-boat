import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boat } from '../../interfaces/boat';
import { BoatService } from '../../services/boat.service';

@Component({
  selector: 'app-display-boats',
  templateUrl: './display-boats.component.html',
  styleUrls: ['./display-boats.component.sass']
})
export class DisplayBoatsComponent implements OnInit {
  boats$: Observable<Boat[]>;

  constructor(private boatService: BoatService) {
  }

  ngOnInit(): void {
    this.boats$ = this.boatService.getBoats();
    this.boats$.subscribe(console.log);
  }

}
