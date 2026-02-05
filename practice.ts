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
interface User {
    name: string;
    age: number;
    email?: string; 
    // optional
}

const user: User={
    name: 'Anjali',
    age: 22

};