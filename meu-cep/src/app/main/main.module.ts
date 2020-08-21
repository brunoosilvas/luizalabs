import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { MessageService } from 'primeng/api';

import { CepsComponent } from './ceps/ceps.component';
import { CepsService } from './ceps/ceps.service';

@NgModule({
  declarations: [ CepsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    TabViewModule,
    TableModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    MessagesModule,

  ],
  exports: [
    CepsComponent
  ],
  providers: [
    CepsService,

    MessageService

  ]
})
export class MainModule { }
