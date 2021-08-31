import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private userName:string;

  constructor(private httpClient:HttpClient) { 
    
  }

  getProfileInfo():Observable<any>{
    let dataUrl = "https://api.github.com/users/JoeshGichon";
    return this.httpClient.get<any>(dataUrl);
  }
  getrepositories():Observable<any>{
    let dataUrl = "https://api.github.com/users/JoeshGichon/repos";
    return this.httpClient.get<any>(dataUrl);
  }
}
