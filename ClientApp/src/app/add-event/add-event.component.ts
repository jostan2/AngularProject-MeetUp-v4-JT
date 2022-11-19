import { Component, OnInit, Input } from '@angular/core';
import { Events } from '../interface/Events';
import { EventService } from '../service/event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Input() eventList:Events[] = [];
  @Input() existingEvents: Events[] = [];
  // newEvent:Events = {} as Events;

  newEvent:Events = {
    id:0, 
    name:'', 
    description:'', 
    category:'', 
    price:0, 
    favorite:false
  };

  constructor(private eventService:EventService) { }

  ngOnInit(): void {

  }

  addEvent()
  {
   console.log(this.newEvent);
    this.eventService.addEvent(this.newEvent)
    .subscribe({
      next: (event) => {
        console.log(event)
      }
    });
  }

  // createNewEvent()
  // {
  //   // this.newEvent.favorite = Boolean((<HTMLInputElement> document.getElementById("newFavorite")).value);
  //   this.eventService.createNewEvent(this.newEvent).subscribe(
  //   (response) => {
  //     this.existingEvents.push(this.newEvent);
  //   });
  //   console.log(this.existingEvents)
  // }


  // saveNewEvent(): void
  // {
  //   const data = {
  //     name: this.newEvent.name,
  //     description: this.newEvent.description,
  //     category: this.newEvent.category,
  //     price: this.newEvent.price,
  //     favorite: this.newEvent.favorite
  //   };

  //   this.eventService.createNewEvent(data).subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }



  // createNewEvent()
  // {
  //   this.eventService.createNewEvent(this.newEvent).subscribe(
  //     (result) => { this.eventService.getEvents().subscribe(
  //       (resultEvent) => {this.eventList = resultEvent}
  //     )});
  // }



  

}
