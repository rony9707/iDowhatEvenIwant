import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  
  ngOnInit(): void {
  }
  // getUrl(){
  //   return "url('assets/home/background-img.jpg')";
  // }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
