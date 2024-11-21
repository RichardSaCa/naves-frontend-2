import { Component } from '@angular/core';
import { NaveTripulada } from '../../../models/naveTripulada.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-add-nave-tripulada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-add-nave-tripulada.component.html',
  styleUrl: './form-add-nave-tripulada.component.css'
})
export class FormAddNaveTripuladaComponent {
  naveTripulada!: NaveTripulada;

  constructor(){
    this.naveTripulada = {
      idNaveEspacial: 0,
      nombre: '',
      potencia: 0,
      pais: '',
      peso: 0,
      mision: '',
      numeroTripulantes: 0
    }
  }

  addNave(){
    console.log(this.naveTripulada)
  }
}
