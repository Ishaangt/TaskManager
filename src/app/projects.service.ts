import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }

  private NODE_HOST: string ="http://localhost:9090";

  getAllProjects(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.NODE_HOST + "/api/projects", {responseType: "json"}).pipe(
      map(
        (data: Project[]) => {
          // -- Do something for calculations --
          return data;
        }
      )
    )
  }

  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>(this.NODE_HOST + "/api/projects",newProject,{responseType: "json"})
  }

  updateProject(updateProject: Project): Observable<Project>{
    return this.httpClient.put<Project>(this.NODE_HOST + "/api/projects",updateProject, {responseType: "json"})
  }

  deleteProject(projectID: number): Observable<string>{
    return this.httpClient.delete<string>(this.NODE_HOST + "/api/projects?ProjectID=" + projectID, {responseType: "json"})
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.NODE_HOST + "/api/projects/search/" + searchBy + "/" + searchText, {responseType: "json"})
  }
}
