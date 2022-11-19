import { Component, Input, OnInit} from '@angular/core';
import { EventService } from '../service/event.service';
import { Events } from '../interface/Events';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  @Input() eventList: Events[] = [];

  @Input() trueList:Events[] = [];

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
        // console.log(results);
    });
  }
  
  addFavorite(i:number)
  {
    console.log(i)
    if(this.eventList[i].favorite === false)
    {
      this.eventList[i].favorite = true;
      this.trueList.push(this.eventList[i]);
      // console.table(this.trueList);
    }
  }

  remFavorite(i:number)
  {
    console.log(i);
    if(this.eventList[i].favorite === true)
    {
      this.eventList[i].favorite = false;
      this.trueList.splice(i);
      console.table(this.trueList);
    }

  }
}
