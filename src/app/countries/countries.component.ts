import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(public location: Location,public _route:ActivatedRoute, public router:Router,public toastr: ToastrService,public httpService:HttpService) {
    // this.toastr.success('Countries Loaded');
   }


  public countries:any;
  public region;
  public currency;
  public language;

  

  ngOnInit() {
    
    
    
    console.log("Countries Component Loaded");

    this._route.params.subscribe(param => {
    
      let regionId = this._route.snapshot.paramMap.get('regionId')
      this.region = regionId;
        this.httpService.getCountriesByRegion(regionId).subscribe(
          
          data =>{
            console.log(data);
            
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
    });

    this._route.params.subscribe(param => {

        let currencyId = this._route.snapshot.paramMap.get('currencyId')
        this.currency = currencyId;
        this.httpService.getCountriesByCurrency(currencyId).subscribe(

          data =>{
            console.log(data);
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
  });

    this._route.params.subscribe(param => { 

      let languageId = this._route.snapshot.paramMap.get('languageId')
      this.language = languageId;
        this.httpService.getCountriesByLanguage(languageId).subscribe(

          data =>{
            console.log(data);
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
    });
    

  }
  
  goback() {
    this.location.back(); // <-- go back to previous location
  }
 
  currencyToastr(currency) {
    this.toastr.info('Filtered Countries by '+currency+' currency.');
  }

  langToastr(lang) {
    this.toastr.info('Filtered Countries by '+lang+' language.');
  }


}
