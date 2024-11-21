import { Component, inject } from '@angular/core';
import { NaveLanzadera } from '../../../models/naveLanzadera.model';
import { FormsModule } from '@angular/forms';
import { NavesService } from '../../../services/naves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-nave-lanzadera',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-add-nave-lanzadera.component.html',
  styleUrl: './form-add-nave-lanzadera.component.css'
})
export class FormAddNaveLanzaderaComponent {
  naveLanzadera!: NaveLanzadera;
  private router = inject(Router);
  constructor(private naveService: NavesService){
    this.naveLanzadera = {
      idNaveEspacial: 0,
      nombre: '',
      potencia: 0,
      pais: '',
      peso: 0,
      objetoLanza: '',
      tipoCombustible: '',
      pesoTransporte: 0
    }
  }

  addNave(){
    this.naveService.saveLanzadera(this.naveLanzadera).subscribe({
      next: (data)=>{this.router.navigate(['']);}
    })
    console.log(this.naveLanzadera)
  }

}
