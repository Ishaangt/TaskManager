export class TeamMembersSummary {
    Region: string;
    TeamMemberCount: number; 
    TemporarilyUnavailableMembers: number;

    constructor(){
        this.Region = null;
        this.TeamMemberCount = 0;
        this.TemporarilyUnavailableMembers = 0;
    }
}

