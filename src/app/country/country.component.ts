import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private router:Router,private toastr: ToastrService,public httpService:HttpService) { 
    this.toastr.info('Country Component Loaded', 'Info');
  }

  public countryDetails:any;

  ngOnInit() {
    let countryId = this._route.snapshot.paramMap.get('countryId')
    console.log("Country Component Loaded");
    
    this.httpService.getCountryDetails(countryId).subscribe(

      data =>{
        console.log(data);
        this.countryDetails = data;
        console.log("Country Details : ",this.countryDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}
