import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary() : any[]{
    var teamMembersSummary = [
        {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
        {Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 5},
        {Region: "North", TeamMembersCount: 17, TemporarilyUnavailableMembers: 5},
        {Region: "South", TeamMembersCount: 12, TemporarilyUnavailableMembers: 2}
      ];
      return teamMembersSummary;
  }

  getTeamMembers() : any[]{
    var teamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ]
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Krishna', Status: 'Available' },
          { ID: 14, Name: 'Mohan', Status: 'Available' },
          { ID: 15, Name: 'Raju', Status: 'Busy' },
          { ID: 16, Name: 'Farooq', Status: 'Busy' },
        ]
      }
    ];
    return teamMembers;
  }

  getProjects() : string[]{
    var projects = [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
      "Project 5",
      "Project 6"
    ];
    return projects;
  }

  getClients() : string[]{
    var clients = [
      "ABC Software Solutions",
      "DEF Software Solutions",
      "XYZ Software Solutions",
      "MNO Software Solutions",
      "PQR Software Solutions"
    ];
    return clients;
  }

  getYears() : number[]{
    var years = [];
    for(var i = 2019; i >= 2010; i--){
      years.push(i);
    }
    return years;
  }
}
