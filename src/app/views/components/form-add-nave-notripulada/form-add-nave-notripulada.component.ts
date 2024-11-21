import { Component, inject } from '@angular/core';
import { NaveNoTripulada } from '../../../models/naveNoTripulada.model';
import { FormsModule } from '@angular/forms';
import { NavesService } from '../../../services/naves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-nave-notripulada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-add-nave-notripulada.component.html',
  styleUrl: './form-add-nave-notripulada.component.css'
})
export class FormAddNaveNotripuladaComponent {
  naveNoTripulada!: NaveNoTripulada;

  private router = inject(Router);
  constructor(private naveService: NavesService){
    this.naveNoTripulada = {
      idNaveEspacial: 0,
      nombre: '',
      potencia: 0,
      pais: '',
      peso: 0,
      mision: '',
      tipoCombustible: '',
      toneladasEmpuje: 0
    }
  }

  addNave(){
    this.naveService.saveNoTripulada(this.naveNoTripulada).subscribe({
      next: (data)=>{this.router.navigate(['']);}
    })
  }

}
