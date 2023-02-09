import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  projects = [
    { title: 'Project 1', description: 'This is project 1' },
    { title: 'Project 2', description: 'This is project 2' },
    { title: 'Project 3', description: 'This is project 3' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
