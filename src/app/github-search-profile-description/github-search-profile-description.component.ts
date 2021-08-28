import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-profile-description',
  templateUrl: './github-search-profile-description.component.html',
  styleUrls: ['./github-search-profile-description.component.css']
})
export class GithubSearchProfileDescriptionComponent implements OnInit {

  @Input() githubPrrofile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
