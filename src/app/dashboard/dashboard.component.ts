import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  TotalTasks:number;
  ProjectCost: number;
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  Zones: string[];
  TeamMembers = [];
  TeamMembersSummary = [];

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Ishaan Gupta";
    this.NoOfTeamMembers = 16;
    this.TotalCostOfAllProjects = 12;
    this.PendingTasks = 4;
    this.TotalTasks = 12;
    this.ProjectCost = 210000234;
    this.UpComingProjects = 7;
    this.CurrentExpenditure = 212312124;
    this.AvailableFunds = 34228832;

    this.Clients = [
      "AmericanTower Corp", "HCL Technologies", "TechMahindra"
    ];
    this.Projects = [
      "Project 1", "Project 2", "Project 3", "Project 4"
    ];
    for(var i= 2019;i >= 2010; i--){
      this.Years.push(i);
    }
    this.Zones = [
      "East","South","West","North"
    ];

    this.TeamMembersSummary = [
      {Region: "East", TeamMemberCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMemberCount: 14, TemporarilyUnavailableMembers: 7},
      {Region: "South", TeamMemberCount: 26, TemporarilyUnavailableMembers: 1},
      {Region: "North", TeamMemberCount: 11, TemporarilyUnavailableMembers: 0}
    ];

    this.TeamMembers = [
      {
        Region: "East", Members: [
          {ID: 1, Name: "Ishaan Gupta", Status: "Available"},
          {ID: 1, Name: "Mayank Walia", Status: "Available"},
          {ID: 1, Name: "Rahul Lahiri", Status: "Busy"},
          {ID: 1, Name: "Amit M", Status: "Busy"}
        ]
      },
      {
        Region: "South", Members: [
          {ID: 1, Name: "Rahul Kumar", Status: "Available"},
          {ID: 1, Name: "Rahul Agarwal", Status: "Available"},
          {ID: 1, Name: "Ajay Rana", Status: "Busy"},
          {ID: 1, Name: "Nitish Singh", Status: "Busy"}
        ]
      },
      {
        Region: "West", Members: [
          {ID: 1, Name: "Nidhi Tyagi", Status: "Available"},
          {ID: 1, Name: "Aparna Tyagi", Status: "Available"},
          {ID: 1, Name: "Santosh Sarani", Status: "Busy"},
          {ID: 1, Name: "Kushal Verma", Status: "Busy"}
        ]
      },
      {
        Region: "North", Members: [
          {ID: 1, Name: "Soumyajyoti", Status: "Available"},
          {ID: 1, Name: "Pratik P", Status: "Available"},
          {ID: 1, Name: "Shubham Sharma", Status: "Busy"},
          {ID: 1, Name: "RajKiran", Status: "Busy"}
        ]
      }
    ]
  }
}
