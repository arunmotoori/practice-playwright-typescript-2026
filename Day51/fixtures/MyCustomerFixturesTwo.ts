import {test as baseTest} from "@playwright/test";

type MyFixtures = {
    fixtureA:String,
    fixtureB:String
}

type MyWorkerFixtures = {
    workerFixtureZ:String;
}

export const test = baseTest.extend<MyFixtures,MyWorkerFixtures>({
    fixtureA: async ({},use)=>{
        console.log("Before test FixtureA");
        await use("");
        console.log("After test FixtureA");
    },
    fixtureB: async ({},use)=>{
        console.log("Before test FixtureB");
        await use("");
        console.log("After test FixtureB");
    },
    workerFixtureZ:[async ({},use)=>{
        console.log("Before worker FixtureZ");
        await use("");
        console.log("After worker FixtureZ");
    },{scope:"worker"}]
});