import { TeamMembersList } from './team-members-list';

export class TeamMembers {
    /*
    {
        "Region": "North", "Members": [
          {"ID": 1, "Name": "Soumyajyoti", "Status": "Available"},
          {"ID": 1, "Name": "Pratik P", "Status": "Available"},
          {"ID": 1, "Name": "Shubham Sharma", "Status": "Busy"},
          {"ID": 1, "Name": "RajKiran", "Status": "Busy"}
        ]
      }
    */

    Region: string;
    Members: TeamMembersList[];

    constructor(){
        this.Region = null;
        this.Members = null;
    }
}
