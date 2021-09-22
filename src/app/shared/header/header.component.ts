import { Component, HostListener, OnInit } from '@angular/core';
import { HomeModule } from 'src/app/home/home.module';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }
  
  siteTitle = 'I do whatever I want'
  subTitle = 'Welcome to my domain'

  
  
}
