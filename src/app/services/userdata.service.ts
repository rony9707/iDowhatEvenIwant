import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private username = new BehaviorSubject('');

  constructor() { }

  //Getting Data from source in this case LoginComponent.ts
  setUsername(message: string) {
    this.username.next(message)
  }

  //Sending Data to destination in this case HomeComponent.ts
  getUsername(){
    return this.username.asObservable();
  }
}
