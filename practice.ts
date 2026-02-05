let fullName: string = "Anjali Negi";
let age: number = 21;
let isPremiumUser: boolean = true;


function getUserSummary (name:string, age:number): string{
return `${name} is ${age} years old.`;
}

getUserSummary('Anjali', 21);

// object 

// let user : {name:string; age: number}={
//     name: 'Anjali',
//     age:22
// };

// interface
interface Product{
    title: string,
    price: number,
    inStock: boolean,
    discount?: number
}

const laptop: Product ={
    title: 'dell latitude',
    price: 120000,
    inStock: true

}
// interfaces in Function
interface User {
  name: string;
  age: number;
}

function printUser(user: User): string {
  return `${user.name} is ${user.age} years old`;
}
