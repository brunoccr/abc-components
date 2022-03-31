import { LightningElement } from 'lwc';

import { documents } from './mockData';

export default class CreditRequestDocumentation extends LightningElement {
  myRecordId;

  get documents() {
    return documents;
  }
  
  get acceptedFormats() {
    return ['.pdf', '.docx', '.doc'];
  }
  
  handleUploadFinished() {

  }
}