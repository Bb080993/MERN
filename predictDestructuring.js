const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//I predict that randomCar will print out "Tesla" because it is the first car in the array
//otherRandomCar will print out "Mercedes" because the comma means to skip the first car in the array

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//Will name not work because we renamed it and otherName print out "Elon"?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//password should print out '12345' and the hashedPassword wouldn't work because there was not password to begin with in the object
//*after trying, hashedPassword was undefined, but did not cause an error

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//first would be 2, second would be 5, and third would be 2
//first==second would be false and first==third would be true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//key would be "value"
//secondKey would be [1,5,1,8,3,3]
//secondKey[0] would be 1
//willThisWork would be 5

