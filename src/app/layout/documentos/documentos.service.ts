import { Injectable } from '@angular/core';
import { Document } from './documentos';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class DocumentService {
  // productList: Product[];
  documentList: Document[];
  selectedDocument: Document = new Document();
  URL_API = 'http://localhost:3000/apifndr/documentos';
  constructor(private http: HttpClient) {}
  getDocuments() {
    return this.http
      .get(this.URL_API)
      .subscribe(res => (this.documentList = res as Document[]));
  }
  insertDocuments(document: Document) {
    return this.http.post(this.URL_API, document);
  }
  updateDocument(document: Document) {
    console.log('service update:', document, 'id:', document.cod_documento);
    return this.http.put(this.URL_API + '/' + document.cod_documento, document);
  }
  deleteDocument(cod_documento: number) {
    console.log(cod_documento);
    return this.http.delete(this.URL_API + '/' + cod_documento);
  }
}
