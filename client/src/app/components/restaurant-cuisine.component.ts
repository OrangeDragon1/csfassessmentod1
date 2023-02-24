import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './restaurant-cuisine.component.html',
  styleUrls: ['./restaurant-cuisine.component.css']
})
export class RestaurantCuisineComponent {
	
	// TODO Task 3
	// For View 2
  @Input() selectedRestaurantsByCuisine: String[] = []
  @Input() selectedCuisine: String = ""

  @Output() selectedRestaurant = new Subject<String>()

  onSelect(data: String) {
    console.info('>>> selected restaurant: ', data)
    this.selectedRestaurant.next(data)
  }
}
