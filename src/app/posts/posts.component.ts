import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Post} from '../Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setPosts();
  }

  setPosts(): void {
    this.data.getPosts().subscribe(posts => this.posts = posts);
  }

}
