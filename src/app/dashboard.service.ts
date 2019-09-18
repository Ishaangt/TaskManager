import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  
  // Get Team Members Service Method
  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
      {Region: "East", TeamMemberCount: 19, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMemberCount: 14, TemporarilyUnavailableMembers: 7},
      {Region: "South", TeamMemberCount: 26, TemporarilyUnavailableMembers: 1},
      {Region: "North", TeamMemberCount: 11, TemporarilyUnavailableMembers: 0}
    ];
    return TeamMembersSummary;
  }
}
