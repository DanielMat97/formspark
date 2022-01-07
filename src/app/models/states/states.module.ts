import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from '../state/state.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StatesModule {
  current_page: number = 0;
  data: Array<StateModule> = []
}
