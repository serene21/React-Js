const obj = {
    name: "nkemenyi",
    surname: "hema"
}
const obj2 = {
    ... obj,
    age:21
}

const obj3 = {
    ... obj2,
    age:40
}

console.log(obj2)



const {
    surname,
    ...rest

} = obj3;

console.log(obj3);

