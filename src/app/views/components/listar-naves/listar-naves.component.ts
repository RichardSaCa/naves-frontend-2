import { Component } from '@angular/core';
import { NavesService } from '../../../services/naves.service';
import { NaveLanzadera } from '../../../models/naveLanzadera.model';
import { NaveEspacial } from '../../../models/naveEspacial.model';
import { NaveTripulada } from '../../../models/naveTripulada.model';
import { NaveNoTripulada } from '../../../models/naveNoTripulada.model';
import { FormsModule } from '@angular/forms';
import { search } from '../../../models/search.model';


@Component({
  selector: 'app-listar-naves',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar-naves.component.html',
  styleUrl: './listar-naves.component.css'
})
export class ListarNavesComponent {

  navesLanzaderas: NaveLanzadera[] = [];
  navesNoTripuladas: NaveNoTripulada[] = [];
  navesTripuladas: NaveTripulada[] = [];
  naves: NaveEspacial[]=[];
  texto: string = '';
  search!: search;

  constructor(private naveService: NavesService){
  }
  ngOnInit(): void {
    this.getAllNaves();
  }

  getAllNaves(){
    this.naveService.getAllNaves().subscribe({
      next: (data) => {this.naves = data;
        data.forEach((nave) => {
          this.obtenerNaves(nave);
        });
      },
    });
  }

  onInputChange(valor: string){
    if(valor == ''){
      valor = 'all'
    }
    this.navesLanzaderas = []; this.navesNoTripuladas = [];
    this.navesTripuladas = [];
    this.naveService.buscarPorCualquierColumna(valor).subscribe(
      {
        next: (data) => {data.forEach((nave) => {
          this.obtenerNaves(nave);
        })}
      }
    )
  }

  obtenerNaves(nave: any){
    if ('objetoLanza' in nave && 'tipoCombustible' in nave && 'pesoTransporte' in nave) {
      this.navesLanzaderas.push(new NaveLanzadera(nave.idNaveEspacial,nave.nombre, nave.potencia, nave.pais, nave.peso, String(nave.objetoLanza), String(nave.tipoCombustible),Number(nave.pesoTransporte)));
    } else if('tipoCombustible' in nave && 'toneladasEmpuje' in nave && 'mision' in nave) {
      this.navesNoTripuladas.push(new NaveNoTripulada(nave.idNaveEspacial,nave.nombre, nave.potencia, nave.pais, nave.peso, String(nave.tipoCombustible), Number(nave.toneladasEmpuje), String(nave.mision)));
    } else if('mision' in nave && 'numeroTripulantes' in nave) {
      this.navesTripuladas.push(new NaveTripulada(nave.idNaveEspacial,nave.nombre, nave.potencia, nave.pais, nave.peso, Number(nave.numeroTripulantes), String(nave.mision)));
    }
  }
}
