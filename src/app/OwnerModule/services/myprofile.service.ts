import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profilemodel } from '../models/profile.model';
import{ environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private _http: HttpClient) { }
  
    getprofile(): Observable<any>{
      return this._http.get(environment.api_url+"/api/Allowners?user_Id=yaswanth3b3");
    }
    
    updateprofile(input): Observable<any>
    {
      return this._http.put<profilemodel> (environment.api_url+"/api/updateOwner?id=" + input.user_Id,input);
    }
  
}