import { ClientLocation } from "./client-location";

export class Project {
    projectID: number|null;
    projectName: string|null;
    dateOfStart: string|null;
    teamSize: number|null;
    active: boolean;
    status: string|null;
    clientLocationID: number|null;
    clientLocation: ClientLocation|null;

    constructor(){
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new ClientLocation();
    }
}


