import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/management.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public management: ManagementService
  ) { }

  ngOnInit(): void {

    this.searchPosts();

  }

  allPosts = [];

  searchPosts(searchVal = "") {

    let params = new HttpParams().set("searchVal", searchVal);

    this.http.post("https://nutriflex.in/cliqtick/getPosts.php", params).subscribe(res => {
      this.allPosts = res as any;
    });

  }

  curPost:any;

}
