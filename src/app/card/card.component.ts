import { Component } from '@angular/core';

import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // nome!:string;
  // sobrenome!:string;
  // gen!:string;

  semCad:boolean = false

  pessoas!:Pessoa[];

  // nasc!:Date;
  // idade!:number;
  // num!:number;
  // email!:string;

  //clicked:boolean = false;

  constructor(private service: PessoaService){}


  getRegistro(){
    this.service.getAll().subscribe(data => (
      this.pessoas = data
    ))


  }
  listaDados(){

  }

  edit(){
    console.log('editar')
  }

  info(){
    console.log('info')
  }

  trash(){
    console.log('delete')
  }



}
