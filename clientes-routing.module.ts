import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { clientesRoutingModule } from './personas-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    clientesRoutingModule
  ]
})
export class clientesModule { }
