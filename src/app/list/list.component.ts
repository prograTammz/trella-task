import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tap } from 'rxjs/operators';
import { Shipment } from '../model/model';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(200, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(200, style({opacity:0})) 
      ])
    ])
  ]
})
export class ListComponent implements OnInit {

  shipments: Shipment[];
  showFilter: boolean;
  filterForm: FormGroup = new FormGroup({
    longitude: new FormControl(30),
    latitude: new FormControl(30)
  });
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getShipments().subscribe(res =>{
      this.shipments = res.body as Shipment[];
    });
  }

  getShipments(long: number, lat: number) {
    this.data.getShipments(long, lat).subscribe(res =>{
      this.shipments = res.body as Shipment[];
    });
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
  submit(){
    const lat = this.filterForm.controls.latitude.value;
    const long = this.filterForm.controls.latitude.value;
    this.getShipments(long,lat);
    this.toggleFilter();
  }

}
