import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyhallService {

  constructor(private http: HttpClient) { }

  getMyhalls(): Observable<any> {
    return this.http.get(environment.api_url+'/api/owner/?ownerId=5f4c9518d9d8b8b70ff748cb');
  }
}
