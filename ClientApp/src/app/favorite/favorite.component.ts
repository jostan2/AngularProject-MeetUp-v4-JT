import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../interface/Events';
import { EventService } from '../service/event.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteList:Events[] = [];
  test:Events = {} as Events;
  @Input() eventList: Events[] = [];
  
  constructor() { }


  ngOnInit(): void {
    this.listFavorites();
    console.log("listing favorite")
  }

  listFavorites()
  {
    for (let i=0; i < this.eventList.length; i++)
    {
      const test = this.eventList[i];
      if (this.test.favorite === true)
      {
        this.favoriteList.push(test)
      }
      console.table(this.favoriteList)
    }
  }

}
