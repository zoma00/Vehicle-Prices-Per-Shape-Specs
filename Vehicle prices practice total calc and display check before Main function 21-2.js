/*
Here's an intermediate JavaScript challenge for you:

Vehicles Challenge:
-------------------
1- Create a system that calculates the total price of a vehicle based on its shape and 
specifications. 

2- Define a data structure that includes base prices for different vehicle shapes (e.g., sedan, suv)
and additional prices for various specifications (e.g., leather seats, sunroof). 

3-Write a function that takes the vehicle shape and a list of specifications as input and returns the 
total price of the vehicle.

--You can start by defining the data structure for vehicle prices based on shape and specifications,
then create a function that calculates the total price based on the input shape and specs.

    

To enhance this challenge and make it more professional for developers
here are some additional features you can consider adding:
-----------------------------------------------------------------------

1. **Error Handling**: Implement error handling to validate user inputs, such as ensuring the entered 
        shape is valid and the specified specifications exist for the chosen shape.

2. **Unit Testing**: Write unit tests to verify the correctness of the price calculation function and 
    ensure it works as expected for different scenarios.

3. **Modularization**: Consider splitting the code into separate modules or functions to improve code 
    organization and maintainability.

4. **User Interface**: Create a simple user interface using HTML/CSS for a better user experience rather than 
    relying solely on console prompts.

5. **Persistence**: Implement a way to store and retrieve previously saved vehicle configurations or orders.

By incorporating these features, you can make the program more robust, user-friendly, and professional for 
    developers to work with and further enhance their skills.

-----------------------------------------------------------------------------------------------
*/

// Create a system

const vehiclePrices = {
    "sedan":{
            "baseprice": 20000,
            "additionalSpec":{
                "leatherSeats": 1000,
                "sunroof":  3000
            }
        },
        "suv":{
            "baseprice": 30000,
            "additionalSpec":{
                "towing": 4000,
                "offroad": 5000
            }
            

        }
    
};

/*
2- Create a system that calculates the total price of a vehicle based on its shape and 
specifications. 

// NOTES:
---------
---hasOwnProperty in 2 functoions when ever there is if or while.
--------------------------------------------------------------------
1- function calculates : if add.hasOwnProperty(spec)
return totalpric: add[spec] to the array.

2- function Main : while ! hasOwnProperty(shape)

3- function Implementation:
calculte / total price = vehicle + base price/ loop for spec if has.spec/ eles spec not available 
 return  total price.

 
 
map : vehiclePrices/--/shape/--/baseprice/--/additionl specs/--/
calling test : specs/shape/function.*/
/*your code is below */
function calcVprice(shape, specs) {
    let totalprice = vehiclePrices[shape].baseprice;

    for (spec of specs) {
        if(vehiclePrices[shape].additionalSpec.hasOwnProperty(spec)) {
            totalprice += vehiclePrices[shape].additionalSpec[spec];
        }else {
            console.log(`Spec '${spec}' is not `)
        }
    }
    return totalprice;
}


 //map : vehiclePrices/--/shape/--/baseprice/--/additionl specs/--/
function displayMenu() {
    console.log("Vehicle specifications Menu")
    for (let shape in vehiclePrices){
        console.log( `\n ${shape.toUpperCase()}`);
        console.log(`base price: ${vehiclePrices[shape].baseprice}`);

        console.log("Additional price for spec: ");
        for (let spec in vehiclePrices[shape].additionalSpec) {
            console.log(`${spec}': $${vehiclePrices[shape].additionalSpec[spec]}`);
        }
    }
}



let shapes = ["sedan", "suv"];
let specs = ["sunroof", "towing"];

// Functions Testing:
displayMenu();
let totalSedanPrice = calcVprice(shapes[0], specs);
let totalSuvPrice = calcVprice(shapes[1], specs);

console.log(`${shapes[0]}: ${totalSedanPrice}: ${specs.join(',')}`);
console.log(`${shapes[1]}: ${totalSuvPrice}: ${specs.join(',')}`);










/*

function myFunction() {
    console.log("Hello, this function was passed without executing.");
}

// Passing the function without executing it
let functionReference = myFunction;

// To execute the function later, you can call it using the reference
functionReference();


how to check the Menue without prompt:

The statement `console.log(`\n${shape.charAt(0).toUpperCase() + shape.slice(1)}:`);`

plays a role in capitalizing the first letter of the `shape` key when displaying it in the menu.
Here's an explanation of how it works:

- `shape.charAt(0)` retrieves the first character of the `shape` string.
- `toUpperCase()` method converts the first character to uppercase.
- `shape.slice(1)` gets the rest of the characters in the `shape` string starting from the second character.
- Finally, these parts are concatenated to form the capitalized shape name, which is then displayed in the menu.

For example, if `shape` is `"sedan"`, this statement will convert it to `"Sedan"`, ensuring that the first letter 
is capitalized when displaying the shape name in the menu.

*/