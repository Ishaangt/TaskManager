import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamMembers } from '../models/team-members';
import { Observable } from 'rxjs';

const HOSTNAME = "http://localhost:1541";

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor(private http: HttpClient) { }

  getAllTeamMembers(): Observable<TeamMembers[]>{
    return this.http.get<TeamMembers[]>(HOSTNAME + "/api/team-members")
  }
}
