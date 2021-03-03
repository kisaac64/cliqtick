import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/management.service';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  @Input() close;
  @Input() html;

  constructor(
    public management: ManagementService,
    public http: HttpClient
  ) { }

  postUrl = "";
  postName = "";
  postDescription = "";

  ngOnInit(): void {
  }

  selectedName = "";
  selectedID = "";
  allUsers = [];

  searchUsers() {

    let params = new HttpParams().set("searchVal", this.selectedName);

    this.http.post("https://nutriflex.in/cliqtick/getUsers.php", params).subscribe(res => {
      this.allUsers = res as any;
    });

  }

  addPost(){

    if(this.selectedID == ""){
      alert("User cannot be empty!");
      return;
    }

    if(this.postName.length == 0){
      alert("Post name cannot be empty!");
      return;
    }

    if(this.postDescription.length == 0){
      alert("Post description cannot be empty!");
      return;
    }

    if(this.postUrl.length == 0){
      alert("Post title image url cannot be empty!");
      return;
    }

    let params = new HttpParams()
    .set("clientID", this.selectedID)
    .set("postName", this.postName)
    .set("postDescription", this.postDescription)
    .set("postUrl", this.postUrl)
    .set("html", this.html)

  this.http.post("https://nutriflex.in/cliqtick/addNewPost.php", params, { responseType: 'text' })
    .subscribe(res => {

      this.searchUsers();
      this.close();
      alert(res);

    });


  }

}
