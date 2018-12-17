import { Component, OnInit } from '@angular/core';

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
  constructor(
    public documentService: DocumentService,
    private toastr: ToastrService
  ) {}
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  title = 'Registro Descentralizado';
 prueba = true;
  ngOnInit() {
    this.documentService.getDocuments();
  }
  onEdit(document: Document) {
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
    if (documentForm.value.cod_documento === 0) {
      this.documentService
        .insertDocuments(documentForm.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(documentForm);
          this.getDocuments();
        });
    } else {
      this.documentService.updateDocument(documentForm.value).subscribe(res => {
        console.log(res);
        this.resetForm(documentForm);
        this.getDocuments();
      });
    }
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
