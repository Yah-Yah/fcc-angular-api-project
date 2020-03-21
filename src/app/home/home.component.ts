import { Component, OnInit } from '@angular/core';

// we import ApiService defined in previous step that contains get() method
// which fetches data form json rest api server
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => { //calls the get() method of the service for fetching data from the JSON REST API server
			console.log(data);
			this.products = data;
		})
  }
}
