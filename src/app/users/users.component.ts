import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {User} from '../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users = data);
  }

}
