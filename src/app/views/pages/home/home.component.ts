import { Component, inject, OnInit } from '@angular/core';
import { ListarNavesComponent } from "../../components/listar-naves/listar-naves.component";
import { NavesService } from '../../../services/naves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListarNavesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private router = inject(Router);
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

  agregarNave(){
    this.router.navigate(['agregar-nave']);
  }
}
