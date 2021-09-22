import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  //Show current time code
  uptime = 0
  
  ngOnInit(): void {
    setInterval(() =>{
      const uptime = 0
      this.upTime(uptime);
    },1000);   //this will call the updateDate in each second
  }
  
  private upTime(uptime:number){
    this.uptime = this.uptime + 1
  }






  back(){
    window.history.back();
  }


  

}
