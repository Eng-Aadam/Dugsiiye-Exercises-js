//properties and values of each person 
//for in loop and for of loop

const student = [
    { name: "omar tood", age: 25, city: "muqdisho" },
    { name: "mahmed", age: 25, city: "muqdisho" },
    { name: "mc_hamuuda", age: 30, city: "turky" }
];
for (const person of student) {
    console.log("Person:");
    for (const key in person) {
        console.log(`  ${key}: ${person[key]}`);
    }
}