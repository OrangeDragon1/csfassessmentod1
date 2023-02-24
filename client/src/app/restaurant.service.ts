import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom, Subject } from 'rxjs'
import { Restaurant, Comment } from './models'

// temporary local backend
const BACKEND = 'http://localhost:8080'

@Injectable()
export class RestaurantService {

	allCuisine = new Subject<String[]>()
	selectedRestaurantsByCuisine = new Subject<String[]>()

	constructor(private http: HttpClient) { }
	// TODO Task 2 
	// Use the following method to get a list of cuisines
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getCuisineList(): Promise<String[]> {
		// Implememntation in here
		return firstValueFrom(
			this.http.get<String[]>(`${BACKEND}/api/cuisines`)
		).then(results => {
				this.allCuisine.next(results)
				return results
		})

	}

	// TODO Task 3 
	// Use the following method to get a list of restaurants by cuisine
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getRestaurantsByCuisine(cuisine: String): Promise<String[]> {
		// Implememntation in here
		return firstValueFrom(
			this.http.get<String[]>(`${BACKEND}/api/${cuisine}/restaurants`)
		).then(results => {
			this.selectedRestaurantsByCuisine.next(results)
			return results
		})

	}
	
	// TODO Task 4
	// Use this method to find a specific restaurant
	// You can add any parameters (if any) 
	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	// public getRestaurant(???): Promise<Restaurant> {
	// 	// Implememntation in here

	// }

	// TODO Task 5
	// Use this method to submit a comment
	// DO NOT CHANGE THE METHOD'S NAME OR SIGNATURE
	// public postComment(comment: Comment): Promise<any> {
	// 	// Implememntation in here

	// }
}
