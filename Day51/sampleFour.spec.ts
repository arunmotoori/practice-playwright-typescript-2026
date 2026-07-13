import {test} from "../fixtures/MyCustomerFixturesTwo";

test("demonstrating multiple fixtures",async ({workerFixtureZ,fixtureA,})=>{
    console.log("Arun");
});

test("demonstrating multiple fixtures Two",async ({fixtureB})=>{
    console.log("Varun");
});