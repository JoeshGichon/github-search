import { Component, OnInit } from '@angular/core';

import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  public githubUserQuery:string;
  public githubPrrofile:any;
  public githubRepositories:any[];
  public errorMessage:string;

  constructor(private githubSearchService:GithubSearchService) { }

  public searchUser(){
    this.githubSearchService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.githubPrrofile = data
      console.log(this.githubPrrofile)
    });

    this.githubSearchService.getRepositories(this.githubUserQuery).subscribe((data)=>{
      this.githubRepositories=data
      console.log(this.githubRepositories)
    })
  }

  ngOnInit(): void {
  }

}
