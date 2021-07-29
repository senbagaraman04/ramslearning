import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { courseListData } from '../course-list/course-list.component';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private httpClient: HttpClient) { }

  public courseData(backendURL: string): Observable<courseListData> {
    return this.httpClient.get<courseListData>(backendURL);
  }
}
