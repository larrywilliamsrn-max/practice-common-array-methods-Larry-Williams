// Task 1: Create the Order System
const drinks = ["Latte", "Tea", "Espresso"];
const pastries = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and pastries using .length
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access Orders Using Bracket Notation (Hardcoded)
console.log("Combination 1:", drinks[0], "and", pastries[0]); // First drink, first pastry
console.log("Combination 2:", drinks[1], "and", pastries[2]); // Second drink, last pastry
console.log("Combination 3:", drinks[2], "and", pastries[1]); // Third drink, second pastry

// Task 4: Access Orders Dynamically with Variables
const drinkIndex = 1;  // Selected index for drink
const pastryIndex = 0; // Selected index for pastry
console.log("Dynamic Order:", drinks[drinkIndex], "with a", pastries[pastryIndex]);

// Task 5: Loop through drinks using .length
console.log("\n--- Current Drink Menu ---");
for (let i = 0; i < drinks.length; i++) {
    console.log(`Drink ${i + 1}: ${drinks[i]}`);
}

// Task 6: Add a New Order & Track Length
drinks.push("Flat White");
console.log("\nNew drink added!");
console.log("Updated number of drinks:", drinks.length);