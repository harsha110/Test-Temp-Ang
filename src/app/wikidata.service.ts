import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { QuizRTTemplate, Questions, Options } from '../generator/generator.model';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {  
 url1:string='https://www.wikidata.org/w/api.php?origin=*&action=wbsearchentities&search=';
 url2:string='&language=en&format=json';
  constructor( private httpcaller : HttpClient ) {
  }

  getSearchObject(subject : string) {
    return this.httpcaller.get<Object>(this.url1+subject+this.url2)
  }

}
