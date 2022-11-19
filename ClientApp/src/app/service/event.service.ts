import { Inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

import { Events } from '../interface/Events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL:string;
  apievent:string = "api/Events/"
  
  constructor(private http:HttpClient, @Inject("BASE_URL") private url:string) {
    this.baseURL=url;
  }

  public getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.baseURL + this.apievent + "ListAllEvents");
  }

  public getOneEvent(id:number): Observable<Events> {
    return this.http.get<Events>(this.baseURL + this.apievent + "ListEvent/" + id);
  }
  
  public addEvent(newEvent:Events):Observable<Events> {
    return this.http.post<Events>(this.baseURL + this.apievent + "CreateEvent", newEvent);
  }

  //view favorites list?
}