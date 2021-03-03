import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/management.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {


  constructor(
    public management: ManagementService,
    public http: HttpClient
  ) { }


  ngOnInit(): void {

    this.searchUsers();

  }

  allUsers = [];

  searchUsers(searchVal = "") {

    let params = new HttpParams().set("searchVal", searchVal);

    this.http.post("https://nutriflex.in/cliqtick/getUsers.php", params).subscribe(res => {
      this.allUsers = res as any;
    });

  }

  showAddUser = false;
  userUrl = "";
  userName = "";
  userDetails = "";

  addUser() {

    console.log(this.userName);

    if (this.userName.length == 0) {
      alert("Username cannot be empty.");
      return;
    }

    if (this.userDetails.length == 0) {
      alert("User details cannot be empty.");
      return;
    }

    if (this.userUrl.length == 0) {
      alert("User profile url cannot be empty.");
      return;
    }

    let params = new HttpParams()
      .set("userUrl", this.userUrl)
      .set("userName", this.userName)
      .set("userDetails", this.userDetails)

    this.http.post("https://nutriflex.in/cliqtick/addNewUser.php", params, { responseType: 'text' })
      .subscribe(res => {
        this.showAddUser = false;
        this.searchUsers();
        alert(res);
      });

  }

  deleteUser(id) {

    if (confirm("Do you really want to delete this user?")) {

      let params = new HttpParams().set("id", id);

      this.http.post("https://nutriflex.in/cliqtick/deleteUser.php", params, { responseType: 'text' })
        .subscribe(res => {
          this.searchUsers();
          alert(res);
        });

    }

  }

}
