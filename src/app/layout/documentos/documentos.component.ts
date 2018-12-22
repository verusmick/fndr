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
  editMode: any;
  direction: any;
  year: any;
  documentalUnity: any;

  constructor(
    public documentService: DocumentService,
    private toastr: ToastrService
  ) {
    this.documentalUnity='0001';
  }
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
    });
  }

  changForSignature(){
    this.documentService.selectedDocument.signatura = `${this.direction ? this.direction : ''}${this.year ? '-' + this.year : ''}${this.documentalUnity ? '-' + this.documentalUnity : ''}`;
  }

  formulario(documentForm?: NgForm){
    this.resetForm();
    this.editMode = false;

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
    this.resetForm();
    this.editMode = true;

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
    this.parseBeforeSave();
    if(!this.editMode){
      this.documentService
        .insertDocuments(this.documentService.selectedDocument)
        .then(response => {
          console.log(response);
          this.ngOnInit();
        });
    }else{
      this.documentService
        .updateDocument(this.documentService.selectedDocument)
        .then(response => {
          console.log(response);
          this.ngOnInit();
        });
    }
    /*if (documentForm.value.cod_documento === 0) {
      this.documentService
        .insertDocuments(documentForm.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(documentForm);
          this.getDocuments();
        });
    } else {*/

      // this.documentService.updateDocument(documentForm.value).subscribe(res => {
      //   console.log(res);
      //   this.resetForm(documentForm);
      //   this.getDocuments();
      // });
   // }
  }
  // todo: workaround db fix
  parseBeforeSave() {
    this.documentService.selectedDocument['cod_archivo']=1;
    this.documentService.selectedDocument['cod_volumen']=1;
    this.documentService.selectedDocument['cod_nivel_descripcion']=1;
    this.documentService.selectedDocument['cod_unidad_org']=1;
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
    this.documentService.selectedDocument = new Document();
  }
}
