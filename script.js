//task 1
let person = {
    name: "Ponosman",
    age: 150,
    city: "Almaty"
};

console.log(person)
//task 2
person.city = "Astana"
console.warn(person)
//task 3
function greet(){
    console.log("Привет, меня зовут " + person.name + ", мне " + person.age + " лет!")
}

greet()
//task 4
obj1 = { a: 10, b: 20 }
obj2 = { a: 10, b: 20 }

console.debug(obj1 == obj2) //false
console.debug(obj1 === obj2) //false
// potomu chto oni ravny kak i obychno, tak i strogo

//task 5
let OriginalBook = {
    title: "1984",
    author: "Джордж Оруэлл",
    detals: {
        year: "1949",
        pages: "352–384" 
    }
}
let CopyBook = Object.assign({}, OriginalBook)

CopyBook.detals.year = "1950"

console.log(OriginalBook.detals.year)
console.log(CopyBook.detals.year)
//потому что это поверхстное копирование, поэтому меняется сразу 2 объекта
//task 6
let calculator = {
    a: 5,
    b: 7,
    sum(){
        return this.a+this.b
    },
    multiply(){
        return this.a*this.b
    }
}

console.log(calculator.sum())
console.log(calculator.multiply())
//task 7
const car = {
    brand: "Chevrolet",
    model: "Cobalt 2.0 SS (MkI)",
}

car.brand = "Toyota"

console.error(car)
//потому что мы его не заморозили и потому что он не делает объекты "неизменяемым".