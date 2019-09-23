import { Component, OnInit } from '@angular/core';
import { ProjectsService} from '../services/projects.service';
import { Projects } from '../models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];
  createProject: Projects = new Projects();
  updateProject: Projects;
  editProject: Projects = new Projects;
  index: number;

  constructor(private projectService: ProjectsService) { 

  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response: Projects[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick(){
    this.projectService.insertProject(this.createProject).subscribe(
      (response) => {
        // Add Project to Grid
        var p: Projects = new Projects;
        p.teamSize = response.teamSize;
        p.dateOfStart = response.dateOfStart;
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        this.projects.push(p);

        // Reset
        this.createProject.teamSize = null;
        this.createProject.dateOfStart = null;
        this.createProject.projectID = null;
        this.createProject.projectName = null;
      },(error) => {
        console.error(error);
      }
    );
  }

  onClickEdit(event, index: number){
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart =  this.projects[index].dateOfStart;
    this.editProject.teamSize =  this.projects[index].teamSize;
    this.index = index;
  }
  onClickUpdate(){
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Projects) => {
        var p: Projects = new Projects;
        p.teamSize = response.teamSize;
        p.dateOfStart = response.dateOfStart;
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        this.projects[this.index] = p;

        // Reset
        this.editProject.teamSize = null;
        this.editProject.dateOfStart = null;
        this.editProject.projectID = null;
        this.editProject.projectName = null;
      }, (error) => {
        console.error(error);
      })
  }

  onClickDelete(){
    console.log("delete");
  }



}
