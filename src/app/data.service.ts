import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Shipment } from './model/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public shipments: Shipment[];
  public location: Location;

  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string) {
    localStorage.setItem('email', username);
    this.router.navigate(['listing']);
  }

  public getShipments(long: number = 30, lat: number = 30): Observable<HttpResponse<Shipment[]>> {
    return this.http.get<Shipment[]> (`/marketplace?lng=${long}&lat=${lat}`, {observe: 'response'});
    //return this.http.get<Shipment[]> (`assets/data.json`, {observe: 'response'});
  }
}
