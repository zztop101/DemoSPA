import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserAndPosts } from './models/user-and-posts';
import { PostComment } from './models/post-comment';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  constructor(private httpClient: HttpClient) { }

  getUserAndPosts() {

    let URL = "http://localhost:8080/api/users-and-posts";
    // add small delay to show progress spinner for demo 
    return this.httpClient.get<UserAndPosts[]>(URL).pipe(delay(1500));

  }

  getComments(postId: number) {

    let URL = "http://localhost:8080/api/comments?postId=" + postId;
    return this.httpClient.get<PostComment[]>(URL);

  }
}


