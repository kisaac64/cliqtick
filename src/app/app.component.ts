import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from './management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public management: ManagementService,
    public router: Router
  ){}

  menuIndex = 0;

  navigate(index){

    this.menuIndex = index;

    if(index == 0){
      this.router.navigate(["recent-posts"]);
    }else if(index == 1){
      this.router.navigate(["new-post"]);
    }else if(index == 2){
      this.router.navigate(["users"]);
    }

  }

}
