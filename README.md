# Vehicle-Prices-Per-Shape-Specs

Here's a sample README file for your GitHub repository for the Vehicles Challenge project:

---

# Vehicles Challenge

## Overview

The Vehicles Challenge is a JavaScript-based application that calculates the total price of a vehicle based on its shape and specifications. Users can select different vehicle types (e.g., sedan, SUV) and additional features (e.g., leather seats, sunroof) to determine the final cost.

## Features

- **Vehicle Price Calculation**: Calculates total price based on vehicle shape and specifications.
- **Data Structure**: Utilizes a structured format for vehicle shapes and their corresponding base prices and additional specifications.
- **Error Handling**: Validates user inputs to ensure correct vehicle shapes and specifications are selected.
- **User-Friendly Menu**: Displays available vehicle shapes and specifications in a clear format.

## Data Structure

The application uses a nested object structure to store base prices and additional specifications for each vehicle shape:

```javascript
const vehiclePrices = {
    "sedan": {
        "baseprice": 20000,
        "additionalSpec": {
            "leatherSeats": 1000,
            "sunroof": 3000
        }
    },
    "suv": {
        "baseprice": 30000,
        "additionalSpec": {
            "towing": 4000,
            "offroad": 5000
        }
    }
};
```

## Functions

### `calcVprice(shape, specs)`

Calculates the total price of the vehicle based on the selected shape and specifications. 

- **Parameters**:
  - `shape`: The type of vehicle (e.g., "sedan", "suv").
  - `specs`: An array of specifications selected by the user.
  
- **Returns**: The total price of the vehicle.

### `displayMenu()`

Displays the available vehicle shapes and their base prices along with additional specifications and their costs.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vehicles-challenge.git
   ```

2. Open the project in your preferred code editor.

3. Run the JavaScript code in your browser's console or using Node.js.

4. Call the `displayMenu()` function to view available vehicles and their specifications.

5. Use the `calcVprice(shape, specs)` function to calculate the total price of a vehicle.

## Testing

You can test the functionality by calling the functions with different parameters. For example:

```javascript
let totalSedanPrice = calcVprice("sedan", ["sunroof"]);
let totalSuvPrice = calcVprice("suv", ["towing", "offroad"]);
console.log(`Total Sedan Price: $${totalSedanPrice}`);
console.log(`Total SUV Price: $${totalSuvPrice}`);
```

## Future Improvements

- Implement unit tests to verify the correctness of the price calculation function.
- Create a simple user interface using HTML/CSS for better user interaction.
- Add persistence to store and retrieve previously saved vehicle configurations.

## License

This project is licensed under the MIT License.



