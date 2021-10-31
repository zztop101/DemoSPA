import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BlogService } from '../blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsResolverService  implements Resolve<any> {

  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.blogService.getUserAndPosts();
  }
}
