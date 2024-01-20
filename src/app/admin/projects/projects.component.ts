import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../project';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editProjectIndex: number = 0;
  deleteProject: Project = new Project();
  deleteProjectIndex: number = 0;

  searchBy: string = "SearchBy";
  searchText: string = '';

  constructor(private projectsService: ProjectsService){}

  ngOnInit(): void {
      this.projectsService.getAllProjects().subscribe(
        (response: Project[]) => {
          this.projects = response;
        }
      );
  }

  onSaveClick(){
    this.projectsService.insertProject(this.newProject).subscribe({
      next: (response) => {
        this.projects.push(this.newProject);
        this.newProject.projectID = 0;
        this.newProject.projectName = '';
        this.newProject.dateOfStart = '';
        this.newProject.teamSize = 0;

      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

  onEditClick(event: any, index: number){
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editProjectIndex = index;
  }

  onUpdateClick(){
    this.projectsService.updateProject(this.editProject).subscribe({
      next: (response: Project) => {
        var projectTemp: Project = new Project();
        projectTemp.projectID = response.projectID;
        projectTemp.projectName = response.projectName;
        projectTemp.dateOfStart = response.dateOfStart;
        projectTemp.teamSize = response.teamSize;

        this.projects[this.editProjectIndex] = projectTemp;
        this.editProject.projectID = 0;
        this.editProject.projectName = '';
        this.editProject.dateOfStart = '';
        this.editProject.teamSize = 0;
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
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe({
      next: (response: any) => {
        this.projects.splice(this.deleteProjectIndex, 1);
        this.deleteProject.projectID = 0;
        this.deleteProject.projectName = '';
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
}
