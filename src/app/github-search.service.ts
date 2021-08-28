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
    // .pipe(
    //   retry(count 1),
    //   catchError(this.handleErrors)
    // )
  }

  // getting github repositories
  public getRepositories(searchQuery):Observable<any[]>{
    let dataURL = `https://api.github.com/users/repos${searchQuery}?${environment.clientId}&${environment.clientSecret}`;

    return this.httpClient.get<any[]>(dataURL)
    // .pipe(
    //   retry(count 1),
    //   catchError(this.handleErrors)
    // )
  }

  // handling error
  public handleErrors(error:HttpErrorResponse){
      let errorMessage:string;
      if(error.error instanceof ErrorEvent){
        // client side error
        errorMessage = `MESSAGE : ${error.error.message}`;
      }else{
        // server side error
        errorMessage = `STATUS : ${error.status}MESSAGE : ${error.message}`;
      }
      return throwError(errorMessage);
  }
}
function retry(count: { (label?: string): void; (label?: string): void; }, arg1: number): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

