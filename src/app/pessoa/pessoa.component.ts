import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { City } from '../City';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  cities:City[];
  selectedCity!:string;

  nome:string = '';
  sobrenome:string = '';
  gen:string[] = [];
  calendar!:Date;
  idade!:number;
  listaPessoas!:any;

  pessoa!:Pessoa;

  formInvalid:boolean = false;
  isOk:boolean = false;
  btnCheck:boolean=false; //começa como false para fins de testes

  ngOnInit(){

  }

  //msgOk:Message[] = [{severity:'success', summary:'Enviado!', detail:'Formulário enviado com sucesso'}] ;

  constructor(private service: PessoaService) {

    this.cities = [
        {name: 'Brasil'},
        {name: 'EUA'},
        {name: 'Argentina'},
        {name: 'Portugal'},
        {name: 'Uruguai'}
    ];
  }



  onChange(){
    if(this.gen.length > 1){
      this.gen.pop();
    }
  }

  getPessoa(){
   return this.service.getAll().subscribe(data=>(
    this.listaPessoas = JSON.stringify(data)
   ));
  }


  public calcIdade(dateOfBirth: any){
    return this.idade = moment().diff(dateOfBirth, 'years');

  }



  enviaform(){
    if(!this.nome || !this.sobrenome || !this.calendar){
      this.formInvalid = true;
      this.isOk = false;
    }
    else{
      //FORMULARIO OK
      this.calcIdade(this.calendar)
      // if(this.idade<1){
      //   console.log(false)
      // }

      // this.service.verificaCad()

      this.pessoa = {nome:this.nome, sobrenome:this.sobrenome, idade:this.idade, genero:this.gen, naturalidade:this.selectedCity}

      this.service.save(this.pessoa).subscribe(data=>(
        console.log(data)
      ))

    }
  }

}



