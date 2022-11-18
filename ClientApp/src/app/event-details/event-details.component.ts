import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../interface/Events';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  displayEvent: Events = {} as Events;

  constructor(private eventService:EventService, private router:ActivatedRoute) {
   }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));

    this.eventService.getOneEvent(id+1).subscribe(
      (result:Events) =>
      {
        this.displayEvent = result;
      });
    }
  }