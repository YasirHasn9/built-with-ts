// TS helps to reduce errors and code faster by defining the types which makes it easy for us to predict things

// define a string
const myName: string = "Yasir";

// define a number
const myNumber: number = 10;

// define a boolean
const isBool: boolean = true;
// now let's combine a boolean with a number in a statement be

isBool + myNumber; // we got a warning saying 'Operator '+' cannot be applied to types 'boolean' and 'number'
// which if it was for js would be then convert them into my string or not saying anything about them

// define an array of strings
const letters: string[] = myName.split(" ");

// another way to define an array of anything by using generic
const numbers: Array<number> = [1, 2, 3];

// we can also define a type for an object
const person: {
  first: string;
  last: string;
} = {
  first: "Johnny",
  last: "Depp",
};

// Now, if add another properties to object, it will warn us because it is not there
person.cool = "cool"; // Property 'cool' does not exist on type '{ first: string; last: string; }'

// In Ts we can include an optional key inside an object saying "hi we may use this property on this object"
//  we can do this by using the "?"

const anotherPerson: {
  first: string;
  last: string;
  cool?: string;
} = {
  first: "Joe",
  last: "Doe",
};

anotherPerson.cool = "cool";

// but this is not a practical thing to when it comes to objects types
//  we need a way to define it in one place and then use it every where
// this is why ts came up with something called interface for defining an object types

interface Person {
  first: string;
  last: string;
  cool?: string;
}

const testPersonNameWithInterface: Person = {
  first: "Doe",
  last: "Joe",
  // we can include the cool property if we would like or not
};

// in js, we want to map an object
const ids = {
  10: "a",
  20: "b",
};
ids[30] = "c"; // we can't use because property is not existed on the object of ids
//   ts provides something called Record which is a utility type

const anotherIds: Record<number, string> = {
  40: "f",
  50: "D",
};
anotherIds[60] = "G";
