import { Component, inject } from '@angular/core';
import { FormAddNaveLanzaderaComponent } from "../form-add-nave-lanzadera/form-add-nave-lanzadera.component";
import { FormAddNaveNotripuladaComponent } from "../form-add-nave-notripulada/form-add-nave-notripulada.component";
import { FormAddNaveTripuladaComponent } from "../form-add-nave-tripulada/form-add-nave-tripulada.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-nave',
  standalone: true,
  imports: [FormAddNaveLanzaderaComponent, FormAddNaveNotripuladaComponent, FormAddNaveTripuladaComponent],
  templateUrl: './form-add-nave.component.html',
  styleUrl: './form-add-nave.component.css'
})
export class FormAddNaveComponent {
  private router = inject(Router);

  regresar(){
    this.router.navigate(['']);
  }
}
