import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  constructor() { }
  fakeArray = new Array(70);
  ngOnInit(): void {
  }

}
