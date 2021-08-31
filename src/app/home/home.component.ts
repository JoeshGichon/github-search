import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myProfile:any;
  public myRepositories:any[];

  constructor(private homeService:HomeService) {
    this.homeService.getProfileInfo().subscribe(data => {
      console.log(data);
      this.myProfile = data;
    }); 
    this.homeService.getrepositories().subscribe(data => {
      console.log(data);
      this.myRepositories = data;
    }); 
  }

  ngOnInit(): void {
  }
 
}
