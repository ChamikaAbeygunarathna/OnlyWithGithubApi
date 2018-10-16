import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import statements

@Component({
  selector: 'app-my-selection',
  templateUrl: './my-selection.componet.html',
  styleUrls: ['./my-selection.component.css']
})
// declare componetes which used in this class

export class SelectFormExample implements OnInit {
  userName: String = "";
  responce: any;
  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  search() {
    let b = this.http.get('https://jobs.github.com/positions.json?description=' + this.userName + '&location=sf&full_time=true')
    // create url with parameters
      .subscribe((responce) => {
        this.responce = responce;
        console.log(this.responce);

      });
    if (this.responce == []) {
      window.alert("nothing");
    }
  }

  selectedValue: string;

}
