import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: HttpClient) { }

  getBooking(): Observable<any> {
    return this._http.get(environment.api_url+"/api/recentlybooked?ownerId=kumar");

  }

}