import { Component, Input, OnInit } from '@angular/core';
import { StatesModule } from 'src/app/models/states/states.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() statesList: StatesModule = {
    current_page: 0,
    data: []
  }
  @Input() loader: boolean = true;
  @Input() total_pages: number = 0;
  
  start_slice: number = 0;
  end_slice: number = 5;


  constructor() { }

  ngOnInit(): void {
    this.statesList.data.sort();
  }

  handlePagination(page: number){
    if(page == 1){
      this.start_slice = 0;
      this.end_slice = 5;
    } else {
      this.start_slice = (page - 1) * 5;
      this.end_slice = page * 5;
    }
  }
}
