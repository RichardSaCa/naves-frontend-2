import { Component } from '@angular/core';
import { FormAddNaveComponent } from "../../components/form-add-nave/form-add-nave.component";

@Component({
  selector: 'app-agregar-nave',
  standalone: true,
  imports: [FormAddNaveComponent],
  templateUrl: './agregar-nave.component.html',
  styleUrl: './agregar-nave.component.css'
})
export class AgregarNaveComponent {

}
