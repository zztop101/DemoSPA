import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostsResolverService } from './resolvers/blog-posts-resolver.service';

const routes: Routes = [
  { path: '', component: BlogPostsComponent,  resolve: {  posts: BlogPostsResolverService  } }
];


// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

