import { Injectable } from '@angular/core';
import * as userData from '../../assets/mock/userList.json';
import { User, UserData } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersData = JSON.stringify(userData);
  userData: UserData;

  constructor() { 
    this.userData = JSON.parse(this.usersData);
  }

  getUsers(): Observable<User[]>{
    return of(this.userData.users);
  }
}
