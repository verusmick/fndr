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
  URL_API = 'http://192.168.0.16:3000/apifndr/documentos';
  constructor(private http: HttpClient) {}
  getDocuments() {
    return this.http
      .get(this.URL_API)
      .subscribe(res => {
        console.log(res);
        (this.documentList = res as Document[])
      });
  }
  getDocuments2() {
    return new Promise((resolve, reject) => {
      this.http.get(this.URL_API)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });
  }
  insertDocuments(obj) {
    return new Promise((resolve, reject) => {
      this.http.post(this.URL_API,obj)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });
  }
  updateDocument(obj) {
    return new Promise((resolve, reject) => {
      this.http.put(this.URL_API + '/' + obj.cod_documento, obj)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });
  }
  deleteDocument(cod_documento: number) {
    console.log(cod_documento);
    return this.http.delete(this.URL_API + '/' + cod_documento);
  }
}
