
let person = [
    {
        name: "Rahul",
        age: 20,
        country: "India",
        hobbies: ["Cricket", "Basketball", "Singing"],
    },
    {
        name: "Peter",
        age: 32,
        country: "USA",
        hobbies: ["Swimming", "Painting", "Calligraphy"],
    },
    {
        name: "Rohit",
        age: 31,
        country: "India",
        hobbies: ["Cricket", "Football", "Dancing"],
    },
    {
        name: "John",
        age: 25,
        country: "UK",
        hobbies: ["Chess", "Cooking", "Travelling"],
    },
]


function printObj()
{
    for (let i = 0; i < person.length; i++) {
    if(person[i].age < 30){
        console.log(person[i]);
    }
}
}
function printObj1()
{
    for (let i = 0; i < person.length; i++) {
    if(person[i].country === "India"){
        console.log(person[i]);
    }
}
}
printObj();

printObj1();
