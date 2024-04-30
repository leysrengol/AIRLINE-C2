import { Flight } from '../models/Flight';
import { Passanger } from '../models/Passanger';
import { Meal } from '../services/Meal';
import { MealTime } from '../enums/MealTime';
import {FoodType } from '../enums/MealType';
import { Gender } from '../enums/Enum';
import { Airport } from '../models/Airport';
import { AirportController } from '../controllers/AirportController';
import { Chef } from '../controllers/Chef';

// Create a new flight instance
const flight = new Flight("NYL123", "New York", "London");
const airportController = new AirportController("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const airport = new Airport("JFK", "John F. Kennedy International Airport", "New York City, NY", airportController);

// Create some passengers with their meal preferences
const passanger1 = new Passanger("Alice", "Smith", "alice@example.com", Gender.FEMALE, airport, true);
const passanger2 = new Passanger("Bob", "Johnson", "bob@example.com", Gender.MALE, airport, true);
const passanger3 = new Passanger("Charlie", "Brown", "charlie@example.com", Gender.MALE, airport, false);
const passanger4 = new Passanger("David", "Lee", "david@example.com", Gender.MALE, airport, false);
const passanger5 = new Passanger("Eve", "Wilson", "eve@example.com", Gender.FEMALE, airport, true);

// Add passengers to the flight
flight.addPassenger(passanger1);
flight.addPassenger(passanger2);
flight.addPassenger(passanger3);
flight.addPassenger(passanger4);
flight.addPassenger(passanger5);

// Create some meals for the flight
const meal1 = new Meal(FoodType.Vegetarian, MealTime.Morning);
const meal2 = new Meal(FoodType.Vegan, MealTime.Morning);
const meal3 = new Meal(FoodType.GlutenFree, MealTime.Morning);
const meal4 = new Meal(FoodType.NutFree, MealTime.Afternoon);
const meal5 = new Meal(FoodType.Seafood, MealTime.Dinner);

// Add meals to the flight
flight.addMeal(meal1);
flight.addMeal(meal2);
flight.addMeal(meal1);
flight.addMeal(meal4);
flight.addMeal(meal5);
// console.log("Total Vegetarian Meals:", flight.getTotalMealQuantity(FoodType.Vegetarian));
// console.log("Total Vegan Meals:", flight.getTotalMealQuantity(FoodType.Vegan));
// console.log("Total Gluten-Free Meals:", flight.getTotalMealQuantity(FoodType.GlutenFree));
// console.log("Total Nut-Free Meals:", flight.getTotalMealQuantity(FoodType.NutFree));
// console.log("Total Seafood Meals:", flight.getTotalMealQuantity(FoodType.Seafood));

let chef = new Chef("bro", "tomo", "er9093", Gender.FEMALE, "34983");
// console.log(chef);

// Example usage:
const totalVegetarianMorningMeals = flight.getTotalMealQuantity(FoodType.Vegetarian, MealTime.Morning);
console.log("Total Vegetarian Morning Meals:", totalVegetarianMorningMeals);


// {morning:[
//     MealType.Vegetarian,
//     MealType.Vegan
    
// ],
// lunch:[MealType.Vegetarian,
//     MealType.Vegan],
// dinner:[MealType.Vegetarian,
//     MealType.Vegan],
//    snake:[MealType.Vegetarian,
//     MealType.Vegan,]

// }