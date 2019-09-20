import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMembersSummary } from '../models/team-members-summary';

const HOSTNAME = "http://localhost:1541";

@Injectable()
export class DashboardService {
  
  constructor(private http: HttpClient){

  }
  // Get Team Members Service Method
  // getTeamMembersSummary(): any[] {
  //   var TeamMembersSummary = [
  //     {Region: "East", TeamMemberCount: 19, TemporarilyUnavailableMembers: 4},
  //     {Region: "West", TeamMemberCount: 14, TemporarilyUnavailableMembers: 7},
  //     {Region: "South", TeamMemberCount: 26, TemporarilyUnavailableMembers: 1},
  //     {Region: "North", TeamMemberCount: 11, TemporarilyUnavailableMembers: 0}
  //   ];
  //   return TeamMembersSummary;
  // }

  getTeamMembersSummary(): Observable<TeamMembersSummary[]>{

    return this.http.get<TeamMembersSummary[]>(HOSTNAME + "/api/team-members-summary")
  }
}
