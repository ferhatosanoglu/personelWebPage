import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }
  projects = [

    {
      id: 1,
      name: 'Project 1',
      img: 'assets/images/1.png',

    },
    {
      id: 2,
      name: 'Project 2',
      img: 'assets/images/2.png',

    },
  ];
  ngOnInit(): void {
  }

}
