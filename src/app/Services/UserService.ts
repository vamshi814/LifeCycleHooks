import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {
        console.log('UserService Constructor called');
    } 
    
    UserName: string = "Shivaji- Service";

    getUserName(): string {
        console.log('UserService getUserName called');
        return this.UserName;
    }

}