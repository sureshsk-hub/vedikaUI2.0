import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import{ environment} from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RecentService {

  constructor(private _http: HttpClient) { }
  getRecentbookings(): Observable<any> {
    return this._http.get(environment.api_url+"/api/recentlybooked?ownerId=kumar");
  }
}
