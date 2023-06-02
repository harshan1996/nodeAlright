
const person={
    name:"Harshan",
    designation:"Developer"
}

function p1(){
    return "hello";
}

class Person{
    constructor(age, location){
        this.age=age,
        this.location=location
    }

    getDetails(){
        return `The person's age is ${this.age} and the location is ${this.location}`
    }
}


export {person,p1,Person};

// You can also use the traditional way of module.exports={person,p1,Person}
