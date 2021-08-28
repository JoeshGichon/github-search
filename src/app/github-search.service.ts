import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../environments/environment"
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(private httpClient:HttpClient) { }

  // getting github profile
  public getProfile(searchQuery):Observable<any>{
    let dataURL = `https://api.github.com/users/${searchQuery}?${environment.clientId}&${environment.clientSecret}`;

    return this.httpClient.get<any>(dataURL)
  }

  // getting github repositories
  public getRepositories(searchQuery):Observable<any[]>{
    let dataURL = `https://api.github.com/users/repos${searchQuery}?${environment.clientId}&${environment.clientSecret}`;

    return this.httpClient.get<any[]>(dataURL)
  }
}


