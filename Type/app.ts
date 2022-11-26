// function add(n1: number, n2: number, showResult: boolean, str: string) {
//   const Result = n1 + n2;
//   if (showResult) {
//     console.log(str + Result);
//   } else {
//     return n1 + n2;
//   }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const string1 = "result :";
// add(number1, number2, printResult, string1);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; //any[]
//   role: [number, string];
// } = {
//   name: "giseong",
//   age: 30,
//   hobbies: ["Game", "sports"],
//   role: [1, "Hi"],
// };
// console.log(person.name);

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});



function merge<U extends object  ,I>(objA : U , objB:I){
  return Object.assign(objA ,objB)
}

const merGe = <T extends object ,I>(obj:T ,objB:I)=>{
  return Object.assign(obj,objB)

}

interface LengthType {
  length : number
}
function countAndPrint <T extends LengthType> (element : T){
  let data = "값이 안들어 있습니다.!!"
  if(element.length ===1){
    data = "1개입니다."
  }else if (element.length >1){
    data = `${element.length}입니다.`
  }
  return [element,data]
}
// keyof 
 function extractKeyOF <T extends object ,U extends keyof T>(obj:T, key:U){

  return `value ${obj[key]}`
}

