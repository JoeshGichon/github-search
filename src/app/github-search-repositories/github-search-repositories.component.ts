import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-repositories',
  templateUrl: './github-search-repositories.component.html',
  styleUrls: ['./github-search-repositories.component.css']
})
export class GithubSearchRepositoriesComponent implements OnInit {

  @Input() githubRepositories:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
