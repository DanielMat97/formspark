import { Component, OnInit } from '@angular/core';
import { StatesModule } from 'src/app/models/states/states.module';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statesList: StatesModule = {
    current_page: 0,
    data: []
  }
  loader: boolean = true;
  total_pages: number = 0;

  constructor(private statesService:StatesService) { }

  ngOnInit(): void {
    this.statesService.getStates('root').subscribe(data => {
      this.statesList = data;
      this.total_pages = this.statesList.data.length / 5;
      this.loader = false;
    }, err => {
      console.error(err);
      this.loader = false;
    });
  }
}
