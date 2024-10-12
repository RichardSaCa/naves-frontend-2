import { Component } from '@angular/core';
import { NavesService } from '../../../services/naves.service';
import { NaveLanzadera } from '../../../models/naveLanzadera.model';

@Component({
  selector: 'app-listar-naves',
  standalone: true,
  imports: [],
  templateUrl: './listar-naves.component.html',
  styleUrl: './listar-naves.component.css'
})
export class ListarNavesComponent {

  navesLanzaderas: NaveLanzadera[] = [];

  constructor(private naveService: NavesService){
  }
  ngOnInit(): void {
    this.getAllNavesLanzaderas();
  }

  getAllNavesLanzaderas(){
    this.naveService.getAllNavesLanzaderas().subscribe({
      next: (data) => {this.navesLanzaderas = data},
    });
    console.log(this.navesLanzaderas);
  }
}
