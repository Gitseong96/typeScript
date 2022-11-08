function add(n1: number, n2: number, showResult: boolean, str: string) {
  const Result = n1 + n2;
  if (showResult) {
    console.log(str + Result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const string1 = "result :";
add(number1, number2, printResult, string1);

const person: {
  name: string;
  age: number;
  hobbies: string[]; //any[]
  role: [number, string];
} = {
  name: "giseong",
  age: 30,
  hobbies: ["Game", "sports"],
  role: [1, "Hi"],
};
console.log(person.name);

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
