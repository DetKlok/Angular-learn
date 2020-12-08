import { Component, OnInit } from '@angular/core';
import { IUser } from './user-data-interface';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  user: IUser;

  constructor() {
    this.user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe'
    };
  }

  ngOnInit(): void {
  }

}
