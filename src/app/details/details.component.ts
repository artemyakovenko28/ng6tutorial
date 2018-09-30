import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: User;

  constructor(private data: DataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
     this.setUser();
  }

  setUser(): void {
    let userId: number;
    this.route.params.subscribe(params => userId = params.id);
    this.data.getUser(userId).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
