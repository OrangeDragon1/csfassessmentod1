import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onSelectedRestaurantsByCuisine: String[] = []
  onSelectedCuisine: String = ""

  ngOnInit(): void {
      
  }

  selectedRestaurantByCuisine(data: String[]) {
    this.onSelectedRestaurantsByCuisine = data
  }

  selectedCuisine(data: String) {
    this.onSelectedCuisine = data
  }

  selectedRestaurant(data: String) {
    
  } 
}
