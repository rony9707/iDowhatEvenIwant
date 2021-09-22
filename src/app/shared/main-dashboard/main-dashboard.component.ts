import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  //Show current time code
  date = new Date();
  
  ngOnInit(): void {
    setInterval(() =>{
      const date = new Date();
      this.updateDate(date);
    },1000);   //this will call the updateDate in each second
  }
  
  private updateDate(date:Date){
    this.date = new Date();
  }

  // Back Button Code

  //------------------NOTE: Wanted to try this, did not do it
  // back() {
  //   if (this.route.navigate(['']))=true{
  //     console.warn("True")
  //   }
  //   else{
  //     this.location.back()
  //   }
  // }

  back(){
    window.history.back();
  }



}
