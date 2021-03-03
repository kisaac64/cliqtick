import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'recent-posts',
    pathMatch: 'full'
  },
  {
    path: 'recent-posts',
    component: PostsPageComponent
  },
  {
    path: 'new-post',
    component: AddPostPageComponent
  },
  {
    path: 'users',
    component: UsersPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
