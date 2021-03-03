import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NoSanitizePipe } from './pages/add-post-page/no-sanitize.pipe';
import { AddNewPostComponent } from './pages/add-post-page/add-new-post/add-new-post.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    AddPostPageComponent,
    NoSanitizePipe,
    AddNewPostComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
