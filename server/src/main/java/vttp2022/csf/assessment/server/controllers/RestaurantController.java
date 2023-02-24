package vttp2022.csf.assessment.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vttp2022.csf.assessment.server.services.RestaurantService;

@Controller
@RequestMapping(path="/api")
@CrossOrigin(origins="*")
public class RestaurantController {
  
  @Autowired
  private RestaurantService restaurantSvc;

  @GetMapping(value="/cuisines", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public ResponseEntity<String> getCuisines() {

    List<String> cuisines = restaurantSvc.getCuisines();
    JsonArrayBuilder jArrayBuilder = Json.createArrayBuilder();
    cuisines.stream()
      .forEach(c -> jArrayBuilder.add(c.replace("/", "_")));

    return ResponseEntity.ok(jArrayBuilder.build().toString());
  }

  @GetMapping(value="/{cuisine}/restaurants")
  @ResponseBody
  public ResponseEntity<String> getRestaurants(@PathVariable("cuisine") String cuisine) {
    List<String> restaurants = restaurantSvc.getRestaurantsByCuisine(cuisine);
    JsonArrayBuilder jArrayBuilder = Json.createArrayBuilder();
    restaurants.stream()
      .forEach(r -> jArrayBuilder.add(r));

    return ResponseEntity.ok(jArrayBuilder.build().toString());
  }



}
