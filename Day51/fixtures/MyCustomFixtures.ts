import {test as baseTest} from "@playwright/test";

export const test = baseTest.extend<{fixtureA:String}>({
    fixtureA: async ({},use)=>{
        const a = "I am test fixtureA";
        console.log("Before part of test fixtureA")
        await use(a);
        console.log("After part of test fixtureA")
    }
});