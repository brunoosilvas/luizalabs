
import { Component, OnInit } from '@angular/core';

import { MessageService, Message } from 'primeng/api';

import { CepsService } from './ceps.service';
import { Cep } from './cep';

@Component({
    selector: 'app-ceps',
    templateUrl: './ceps.component.html',
    styleUrls: ['./ceps.component.css']
})
export class CepsComponent implements OnInit {

  response: {
    findFirst: false,
    data: null
  };

  cep: string;
  msg: Message[];

  data: Cep;
  values: Cep[];

  constructor(private cepsService: CepsService,
              private messageService: MessageService) {
    this.data = new Cep();
  }

  ngOnInit(): void {
    this.cepsService.all()
      .then(response => {
        this.values = response.data;
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.message });
      });
  }

  find(): void {
    this.messageService.clear();
    this.response = null;

    if (this.cep) {
      this.data = new Cep();
      this.cepsService.find(this.cep)
        .then(response => {
          this.response = response;
          if (response.data) {
            this.data = response.data;
            this.messageService.add({ severity: 'success', summary: 'Aviso', detail: response.message });
          } else {
            this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: response.message });
          }
        })
        .catch(error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.message });
        });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe o CEP para pesquisar' });
    }
  }

  get isFindFirst(): boolean {
    return this.response ? this.response.findFirst : false;
  }
}
