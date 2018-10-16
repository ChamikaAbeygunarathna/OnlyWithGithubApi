import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import statements

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// declare components

export class AppComponent {
  title = 'assignment';

  constructor(private http: HttpClient) {
  }
  // httpclient involke

  ngOnInit() {
  }
}

console.log("hello angular 6");
// print valule in console