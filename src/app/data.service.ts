import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User';
import {Observable} from 'rxjs/Observable';
import {Post} from './Post';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts');
  }
  
}
