import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StatesModule } from '../models/states/states.module';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  getStates(id_padre: string): Observable<StatesModule> {
    return this.http.get<StatesModule>(`${environment.host}${environment.api_name}`, {
      params: {
        id_padre,
        clase: 'DIVISION_POLITICA',
      }
    });
  }

  saveData(email: any, dpto: any, codigo: any){
    return new Promise((resolve, reject) => {
      if(email === 'serviciosweb@parquesnacionales.gov.co'){
        reject({
          code: 401,
          reason: "Este correo no esta valido, debe colocar el login"
        });
      }
      resolve({
        email,
        dpto,
        codigo
      });
    });
  }
}
