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

  // public createNewEvent(event: Events): Observable<Events> {
  //   return this.http.post<Events>(this.baseURL + this.apievent + "CreateEvent​", event);
  // }
  
  public createNewEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(this.baseURL + this.apievent + "CreateEvent​", event);
  }

  public updateEvent(id:number, event:Events){
    return this.http.post<Events>(this.baseURL + this.apievent + `EditEvent/${id}`, event);
  }
  }
  //view favorites list?
}