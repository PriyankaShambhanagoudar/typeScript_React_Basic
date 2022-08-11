//primitives

let age: number;
age = 12;

let userName: string;
userName = "max";

let isInstructor: boolean;
isInstructor = true;

//Array
/* 

array of string =string[]
array of number= number[]
array of boolean = boolean[]
*/

let hobbies: string[];
hobbies = [
 "Swimming",
 "Football",
 "Cricket",
 "Volleyball",
 "Athletics",
 "Basketball",
 "Skating",
];

//Objectives

let person: {
 age: number;
 name: string;
};

person = {
 age: 12,
 name: "Max",
};

/*
//error 
person = {
 isEmployee: true,
};
 */

let people: {
 age: number;
 name: string;
}[];

//Type inference

let course = "React- The complete Guide";

//course = 1223;

/* 
union types
which allow u to more then one type 
*/

let cousesList: string | number | boolean = "React- The complete Guide";

cousesList = 1234;

//functions and types
export {};
function add(a: number, b: number) {
 return a + b;
}

const result = add(2, 5);

console.log(result);

function print(value: any) {
 console.log(value);
}

/* <T> 

*/
//Generics

function inserAtBeginnning<T>(array: T[], value: T) {
 const newArray = [value, ...array];
 return newArray;
}

/* function inserAtBeginnning(array: any[], value: any) {
 const newArray = [value, ...array];
 return newArray;
} */

const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginnning(demoArray, -1); //[-1,1,2,3]
//const stringArray = inserAtBeginnning(["A", "B", "C"], "D");

//updatedArray[0].split('');
