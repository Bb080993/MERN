
const express = require("express");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

    



// we can create a function to return a random / fake "User"
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.database.mongodbObjectId()
    };
    return newFake;
};
    

const newFakeUser = createUser();
console.log(newFakeUser);


// we can create a function to return a random / fake "company"
// const { faker } = require('@faker-js/faker');
const createCompany = () => {
    const newFake = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFake;
};
   

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const userAndCompany={
        user: newFakeUser,
        company:newFakeCompany
    }
    res.json(userAndCompany)
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );