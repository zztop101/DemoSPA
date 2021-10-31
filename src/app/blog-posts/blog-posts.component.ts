import { BlogService } from './../blog.service';
import { UserAndPosts } from './../models/user-and-posts';
import { PostComment } from './../models/post-comment';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';


@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  userAndPosts: UserAndPosts[];
  activeUser: UserAndPosts;
  displayAllPosts: boolean = false;
  maxPosts: number = 3;
  comments: PostComment[];
  displayComments: boolean = false;
  commentsSpinner: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {
    this.userAndPosts = [];
   }

  ngOnInit(): void {
    this.userAndPosts = this.activatedRoute.snapshot.data["posts"];
  }

  selectUser(user: UserAndPosts) {
    this.activeUser = user;
    this.displayAllPosts = false;
  }

  loadAllPosts() {
    this.displayAllPosts = true;
  }

  viewComments(post: Post) {
    this.blogService.getComments(post.id).subscribe((comments: PostComment[]) => {
      post.comments = comments
    });
  }

  hideComments(post: Post) {
    post.comments = undefined;
  }

}
