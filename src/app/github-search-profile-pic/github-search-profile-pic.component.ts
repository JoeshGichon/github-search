import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-profile-pic',
  templateUrl: './github-search-profile-pic.component.html',
  styleUrls: ['./github-search-profile-pic.component.css']
})
export class GithubSearchProfilePicComponent implements OnInit {

  @Input() githubPrrofile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
