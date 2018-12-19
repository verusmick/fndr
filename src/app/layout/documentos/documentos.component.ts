import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

// Service
import { DocumentService } from '../documentos/documentos.service';

// toastr
import { ToastrService } from 'ngx-toastr';
// Class
import { Document } from './documentos';
// import { DocumentService } from './documentos.service';

// servidor

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {
  documentList: Document[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: any;
  constructor(
    public documentService: DocumentService,
    private toastr: ToastrService
  ) {}
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  title = 'Registro Descentralizado';
  tabla = true;
  formul= false;
  atras = false;
  regi = true;
  ngOnInit(){
    this.tabla = true;
    this.formul= false;
    this.atras = false;
    this.regi = true;
    // datatables
    this.dtTrigger=new Subject();
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 5
    };
    this.documentService.getDocuments2( ).then(Response=>{
      
      this.documentList = Response as Document[]
      this.dtTrigger.next();
    }) ;  
  }


  formulario(documentForm?: NgForm){
    this.tabla = false;
      this.regi = false;
      this.formul= true;
      this.atras = true;
    console.log('hoola');
    
  }

  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  onEdit(document: Document) {
    this.tabla = false;
    this.regi = false;
    this.formul= true;
    this.atras = true;
    this.documentService.selectedDocument = document;
  }
  onDelete(cod_documento: number) {
    if (confirm('Are you sure ?')) {
      this.documentService.deleteDocument(cod_documento).subscribe(res => {
        console.log(res);
        this.documentService.getDocuments();
      });
      this.toastr.success('Successfull Operation', ' Deleted');
    }
  }
  getDocuments() {
    this.documentService.getDocuments();
  }
  addDocument(documentForm?: NgForm) {
    /*if (documentForm.value.cod_documento === 0) {
      this.documentService
        .insertDocuments(documentForm.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(documentForm);
          this.getDocuments();
        });
    } else {*/

      this.documentService.updateDocument(documentForm.value).subscribe(res => {
        console.log(res);
        this.resetForm(documentForm);
        this.getDocuments();
      });
   // }
  }
  editDocument(document: Document) {
    this.documentService.selectedDocument = document;
  }
  deleteDocument(cod_documento: number, documentForm: NgForm) {
    if (confirm('Are you sure ?')) {
      this.documentService.deleteDocument(cod_documento).subscribe(res => {
        this.getDocuments();
        this.resetForm(documentForm);
      });
    }
  }
  resetForm(documentForm?: NgForm) {
    if (documentForm != null) {
      documentForm.reset();
      this.documentService.selectedDocument = new Document();
    }
  }
}
