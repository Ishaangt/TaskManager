import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

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

  constructor(private dashboardService: DashboardService){

  }
  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Ishaan Gupta";
    this.NoOfTeamMembers = 16;
    this.TotalCostOfAllProjects = 12;
    this.PendingTasks = 4;
    this.TotalTasks = 12;
    this.ProjectCost = 4000000;
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

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

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

  onProjectChange($event){
    if($event.target.innerHTML == "Project 1"){
      this.ProjectCost = 10000;
      this.CurrentExpenditure = 20000
      this.AvailableFunds= 100000
    } else if($event.target.innerHTML == "Project 2"){
      this.ProjectCost = 20000;
      this.CurrentExpenditure = 40000
      this.AvailableFunds= 200000
    } else if($event.target.innerHTML == "Project 3"){
      this.ProjectCost = 30000;
      this.CurrentExpenditure = 60000
      this.AvailableFunds= 300000
    } else if($event.target.innerHTML == "Project 4"){
      this.ProjectCost = 40000;
      this.CurrentExpenditure = 80000
      this.AvailableFunds= 400000
    }
  }
}
