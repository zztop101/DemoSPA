import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserAndPosts } from './models/user-and-posts';
import { PostComment } from './models/post-comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  constructor(private httpClient: HttpClient) { }

  getUserAndPosts() {

    let URL = "http://localhost:8080/api/users-and-posts";
    return this.httpClient.get<UserAndPosts[]>(URL); 

  }

  getComments(postId: number) {

    let URL = "http://localhost:8080/api/comments?postId=" + postId;
    return this.httpClient.get<PostComment[]>(URL); 

  }
}
