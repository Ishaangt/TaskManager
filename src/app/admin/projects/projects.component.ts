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
  constructor(private projectService: ProjectsService) { 

  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response: Projects[]) => {
        this.projects = response;
      }
    );
  }



}
