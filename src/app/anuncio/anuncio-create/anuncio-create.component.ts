import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-create',
  templateUrl: './anuncio-create.component.html',
  styleUrls: ['./anuncio-create.component.scss']
})
export class AnuncioCreateComponent implements OnInit {

  constructor() { }

  // rating recebe os dados das avaliações da API e lista na div class:left-column__ratio
  @Input() rating = [
    {
      image: '',
      name: '',
      description: '',
      star: '5'
    }
  ]


  ngOnInit(): void {
  }

}
