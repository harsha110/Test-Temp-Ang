import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { WikidataService } from './wikidata.service';
import { AppComponent } from './app.component';

//import { GeneratorComponent } from '../generator/generator.component';
import { createStylingContextTemplate } from '@angular/core/src/render3/styling';

describe('WikidataService', () => {
  let service:WikidataService;
  let httpMock:HttpTestingController;
  let Sparql:string="";
  let Sparql_Object_mock:Object={name:"harsha"};
  beforeEach(() => {TestBed.configureTestingModule({
    providers: [WikidataService],
    declarations: [AppComponent],
    imports:[HttpClientTestingModule]
  }); 
  service=TestBed.get(WikidataService);
  httpMock=TestBed.get(HttpTestingController);
});

  afterEach(()=>{
    httpMock.verify();
  })

  it('should retrive the data from the API via get', () => {

    service.getSearchObject(Sparql).subscribe(input=>{
      expect(input).toBeDefined;
    })
    const request = httpMock.expectOne(`${service.url1+Sparql+service.url2}`)
    expect(request.request.method).toBe("GET");
    request.flush(Sparql_Object_mock);
  });
});
