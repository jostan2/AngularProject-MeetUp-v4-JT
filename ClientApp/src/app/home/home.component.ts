import { Component, Input, OnInit} from '@angular/core';
import { EventService } from '../service/event.service';
import { Events } from '../interface/Events';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  @Input() eventList: Events[] = [];

  constructor(private eventService:EventService) {
    
   }

  ngOnInit(): void {    
    this.getEvents();
  }

  getEvents()
  {
    this.eventService.getEvents().subscribe(
      (results) => {
        this.eventList = results;
        console.table(results)
    });
  }

  
  setFavorite(i:number)
  {
    this.eventList[i].favorite = true;
    console.log(i, "set to true");
    console.table(this.eventList)
  }

}
