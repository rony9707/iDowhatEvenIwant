import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'userHome',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userName:string=''
  constructor(
    private userdataservice:UserdataService
  ) { }

  ngOnInit(): void {
    this.userdataservice.getUsername().subscribe((username)=>{
      console.log(username)
      this.userName=username
    })
  }

}
