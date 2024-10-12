import { Component, OnInit } from '@angular/core';
import { ListarNavesComponent } from "../../components/listar-naves/listar-naves.component";
import { NavesService } from '../../../services/naves.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListarNavesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private naveService: NavesService){}

  helloWorld?: string = '';

  ngOnInit(): void {
    this.getHelloWorld();
  }

  getHelloWorld(){
    this.naveService.getHelloWorld().subscribe({
      next: (data) => {this.helloWorld = data.toString()},
    });
  }
}
