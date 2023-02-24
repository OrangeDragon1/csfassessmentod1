package vttp2022.csf.assessment.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import vttp2022.csf.assessment.server.repositories.RestaurantRepository;
import vttp2022.csf.assessment.server.services.RestaurantService;

@Controller
@RequestMapping("/Test")
public class TestController {

  @Autowired
  private RestaurantService restaurantSvc;

  @GetMapping
  public String test() {
    // List<String> cuisines = restaurantSvc.getCuisines();
    // System.out.println(cuisines.toString());
    restaurantSvc.getRestaurantsByCuisine("Barbecue");
    return null;
  } 
  

}
