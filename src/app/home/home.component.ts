import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imgUrl = '/assets/POC.gif';
  public width = 850;
  public height=550;


  constructor() { }

  ngOnInit(): void {
  }

}
