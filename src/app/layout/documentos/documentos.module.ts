import { NgModule } from '@angular/core';



// import { DataTablesModule } from 'angular-datatables';


import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DocumentosComponent} from './documentos.component';
import { DocumentosRoutingModule } from './documentos-routing.module';


@NgModule({
  declarations: [DocumentosComponent,
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    // DocumentosListComponent,
    NgbCarouselModule,
    FormsModule,
    NgbAlertModule,
    // DataTablesModule

  ]
  ,
  providers: [],
  bootstrap: [ DocumentosComponent ]
})
export class DocumentosModule { }
