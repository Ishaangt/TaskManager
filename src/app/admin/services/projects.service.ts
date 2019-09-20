import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

const HOSTNAME = "http://localhost:1541";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { 

  }

  getAllProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(HOSTNAME + "/api/projects")
  }
}
