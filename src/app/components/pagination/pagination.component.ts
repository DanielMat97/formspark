import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() total_pages:number = 0;
  @Output() pagination_emit = new EventEmitter<number>();

  render_pages: Array<number> = [];
  current_page: number = 1;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 3; i++){
      this.render_pages.push(i + 1);
    }
  }

  previusRender(){
    if(1 < this.render_pages[0] ){
      this.render_pages.pop();
      this.render_pages.unshift(this.render_pages[0] - 1);
      this.pagination_emit.emit(this.render_pages[0]);
    }
  }

  nextRender(){
    if(this.total_pages > this.render_pages[this.render_pages.length - 1]){
      this.render_pages.shift()
      this.render_pages.push(this.render_pages[this.render_pages.length - 1] + 1);
      this.pagination_emit.emit(this.render_pages[this.render_pages.length - 1]);
    }
  }

  paginationEmit(page:number){
    this.pagination_emit.emit(page);
  }
}
