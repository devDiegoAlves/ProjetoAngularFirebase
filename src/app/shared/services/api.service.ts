import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pokemons: any;

  constructor() {}

  getPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(dados => dados.json() )
    .then(dados => {
      console.log(dados);
      this.pokemons = dados.results;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally( () => {
      console.log('Finalizado');
    })
  }
}
