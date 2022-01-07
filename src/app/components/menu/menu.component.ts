import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatesModule } from 'src/app/models/states/states.module';
import { StatesService } from 'src/app/services/states.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() statesList: StatesModule = {
    current_page: 0,
    data: []
  }
  hidden: boolean = true;
  data_save: any = {
    email: '',
    dpto: '',
    codigo: ''
  }

  constructor(private statesServices: StatesService) { }

  ngOnInit(): void {
  }

  handleSubmit(evt: NgForm){
    const modal = document.getElementById('exampleModal');
    let valid = true;
    Object.keys(evt.value).forEach(element => {
      if(evt.value[element] == ''){
        valid = false;
        Swal.fire({
          title: 'Error!',
          text: 'Formulario invalido',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
      this.data_save[element] = evt.value[element];
    });
    if(valid){
      this.statesServices.saveData(this.data_save.email, this.data_save.dpto, this.data_save.codigo).then(res => {
        Swal.fire({
          title: 'Informacion creada',
          text: 'su informacion se guardo correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(res => {
          location.reload();
        })
      }).catch(err => {
        Swal.fire({
          title: 'No Autorizado',
          text: err.reason,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      })
    }
  }
}
