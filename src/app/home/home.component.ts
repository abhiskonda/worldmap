import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) {
    this.toastr.info('Home Page Loaded', 'Info');
   }

  ngOnInit() {
    console.log("Home Component Loaded");
  }

}
