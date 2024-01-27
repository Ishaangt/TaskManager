import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

const NODE_HOST: string = "http://localhost:9090"; 
@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient : HttpClient) { }

  getClientLocations(): Observable<ClientLocation[]>{
    return this.httpClient.get<ClientLocation[]>(NODE_HOST + "/api/clientlocations", {responseType: "json"});
  }
}
