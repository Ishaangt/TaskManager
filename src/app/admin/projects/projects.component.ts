import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientLocation } from '../../client-location';
import { ClientLocationsService } from '../../client-locations.service';
import { Project } from '../../project';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  //vars init
  projects: Project[] = [];
  clientLocations: ClientLocation[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editProjectIndex: number = -1;
  deleteProject: Project = new Project();
  deleteProjectIndex: number = -1;
  showLoading: boolean = true;
  // Search Init
  searchBy: string = "SearchBy";
  searchText: string = '';

  constructor(private projectsService: ProjectsService, private router: Router, private clientLocationsService: ClientLocationsService){}

  ngOnInit(): void {
      this.projectsService.getAllProjects().subscribe({
        next: (response: Project[]) => {
          this.projects = response;
        },
        error: (error) =>{
          console.log(error);
          this.router.navigateByUrl("/login");
        },
        complete: (() => {
          this.showLoading = false;
        })
      });

      this.clientLocationsService.getClientLocations().subscribe({
        next: (response: ClientLocation[]) => {
          this.clientLocations = response;
        },
        error: (error)=>{
          console.log(error);
        }
      })
  }

  onSaveClick(){
    console.log(this.newProject);
    // this.projectsService.insertProject(this.newProject).subscribe({
    //   next: (response) => {
    //     var project: Project = this.mapProjectToResponse(new Project(),response);
    //     this.projects.push(project);
    //     this.newProject = this.resetProjectToDefaults(this.newProject);

    //   },
    //   error: (error: any) => {
    //     console.log(error.statusText);
    //     alert(error.statusText);
    //   }
    // });
  }

  onEditClick(event: any, index: number){
    this.editProject = this.mapProjectToResponse(this.editProject, this.projects[index]);
    this.editProjectIndex = index;
  }

  onUpdateClick(){
    this.projectsService.updateProject(this.editProject).subscribe({
      next: (response: Project) => {
        var projectTemp: Project = this.mapProjectToResponse(new Project, response);
        this.projects[this.editProjectIndex] = projectTemp;
        this.editProject = this.resetProjectToDefaults(this.editProject);
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    })
  }

  onDeleteClick(event: any, index: number){
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProjectIndex = index;
  }

  onDeleteConfirmClick(){
    this.projectsService.deleteProject(this.deleteProject.projectID as number).subscribe({
      next: (response: any) => {
        this.projects.splice(this.deleteProjectIndex, 1);
        this.deleteProject = this.resetProjectToDefaults(this.deleteProject);
      },
      error: (error: any) =>{
        console.log(error);
        alert(error);
      }
    })
  }

  onSearchClick(){
    console.log(this.searchBy + " " + this.searchText);
    if(this.searchText == '' || this.searchBy == 'SearchBy'){
      this.projectsService.getAllProjects().subscribe({
        next: (response: Project[]) => {
          this.projects = response;
        }
      });
    } else{
      this.projectsService.searchProject(this.searchBy, this.searchText).subscribe({
        next: (response: Project[]) => {
          this.projects = response;
        }
      })
    }
  }


  mapProjectToResponse(project: Project, response: any): Project {
    project.projectID = response.projectID;
    project.projectName = response.projectName;
    project.teamSize = response.teamSize;
    project.dateOfStart = response.dateOfStart.split("/").reverse().join(""); //yyyy-MM-dd
    project.status = response.status;
    project.clientLocationID = response.clientLocationID;
    project.clientLocation = response.clientLocation;
    project.active = response.active;
    return project;
  }

  resetProjectToDefaults(project: Project){
    project.projectID = null;
    project.projectName = null;
    project.teamSize = null;
    project.dateOfStart = null;
    project.status = null;
    project.clientLocation = null;
    project.clientLocationID = null;
    project.active = false;
    return project;
  }

  onSelectChange(value: any){
    var clientLocation = new ClientLocation();
    clientLocation.clientLocationID = value;
    console.log(clientLocation.clientLocationID);
  }
}
