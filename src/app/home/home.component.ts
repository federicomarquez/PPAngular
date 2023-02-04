import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo="Desarrollo Angular"
    
  constructor(){ }
  cambiarTitulo() {
      this.titulo = "Federico"
  }
  
  ngOnInit(): void {

  }
}
