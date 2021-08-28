import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-profile',
  templateUrl: './github-search-profile.component.html',
  styleUrls: ['./github-search-profile.component.css']
})
export class GithubSearchProfileComponent implements OnInit {

  @Input() githubPrrofile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
