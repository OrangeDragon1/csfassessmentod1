import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

	// TODO Task 2
	// For View 1
  @Output() selectedRestaurantsByCuisine = new Subject<String[]>()
  @Output() selectedCuisine = new Subject<String>()

  selectForm!: FormGroup
  sub$!: Subscription
  cuisineList: String[] = []
  restaurantList: String[] = []

  constructor(private fb: FormBuilder, private restaurantSvc: RestaurantService) { }

  ngOnInit(): void {
    this.getCuisines()
  }

  getCuisines() {
    this.restaurantSvc.getCuisineList()
      .then(cuisines => {
        console.info('>>> cuisines: ', cuisines)
        this.cuisineList = cuisines
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }

  onSelect(data: string) {
    // console.info('>>> selecting', data)
    this.selectedCuisine.next(data)
    this.restaurantSvc.getRestaurantsByCuisine(data)
      .then(restaurants => {
        console.info('>>> restaurants: ', restaurants)
        this.restaurantList = restaurants
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
    this.selectedRestaurantsByCuisine.next(this.restaurantList)
  }
}
