export {}

let message = 'amin man world';  //tsc main.ts --watch  //~ persist compiler..
console.log(message);

//then it generates a js file and you can include in your work... 

let x = 10; 
const y = 20;

let sum; 
const title = ' aminu'; //const declarations must be assisgned... 


//boolean, number, string ~ basic types in typestctipt.. 

let isBeginner: boolean = true;
let total:number = 0;
let name:string = 'vishhhh...';

let sentence:string = `My name is ${name}`;


let isNew:boolean = null;
let myName:string = undefined;

//ways of declaring arrays in typescript..
let list1: number[]  = [1,2,3];
let list2:Array<number> = [1,2,3];

//problem with tuple types... 
//one string value and one number and must match. 
//you cant swap or do a mixed length.. 
let person1: [string,number] = ['chris', 22];

enum Color {Red, Green, Blue}; 

let c:Color = Color.Green;
console.log(c);

//to change indexes ... 
enum xColor {Red = 6, Green, Blue};
let d:xColor = xColor.Blue;

console.log(d);


/// or any:type ~ eencompasses all types.. 
let randomVal:any = 10
randomVal = true;
randomVal = 'hello';
//randomVal.toUpperCase();

// it could also be a function 
//randomVal();

//another type unknown... 
let untp:unknown = 34;      //unknown types cant have properties... 


function hasName(obj:any):obj is {name:string}{
    return !!obj && typeof obj === "object" && "name" in obj ;
}


if(hasName(untp)){
    console.log(untp.name);
}

//untp.toUpperCase  -- gives error.. 
// let tx = (untp as string).toUpperCase();


let multiType: number | boolean;   //setting multiple types to a variable.. 
multiType = 20;
multiType = true;  

let anyType:any;
anyType = 20;
anyType = true;

//multitype ~ helps with intellisence.. 

///////////////////////////functions in VS Code.. 
// ? - makes the parameter optional... 

function add(num1:number, num2?:number):number{
   return (num2) ? num1 + num2 : num1 ; 
}

//optional parameters cannot be initialized... 
//e.g. num2?:number = 10 ---- error. 
//default parameters... //num2 - default. 
function addD(num1:number, num2:number = 10):number{
    return (num2) ? num1 + num2 : num1 ; 
 }

add(5,10);
add(5);
// add(5,'10'); //error.s.. 


function fullName(person:{firstname:string, lastname:string}){
    console.log(`${person.firstname} ${person.lastname}`)
}

let p = {
    firstname:'Louis',
    lastname : 'lane'
}

fullName(p);

////////////////////////////better way of writing this... 

interface Person {
    firstname:string;
    lastname?:string;   //optional property... 
};

function profile(person:Person){
    console.log(`${person.firstname} ${person.lastname}`)
}

let xp = {
    firstname:'Martha',
   // lastname : 'Clark'
}
  
profile(xp);

////////////////////////////// ~ classes... 

class Employee {

    protected employeeName: string;  //only accessible withing the class... 
    public employeeDetails:any;

    constructor(name:string){
        this.employeeName = name;
    }

    getDetails(){
        return {
            "name":this.employeeName,
            "position": "employee"
        };
    }

    greet(){
        console.log(`good morning ${this.employeeName}`)
    }
}



let emp1 = new Employee('salama..');
console.log(emp1.getDetails());
emp1.greet();


class Manager extends Employee{
    constructor(managersName:string){
        super(managersName)
    }

    delegateWork(){
        console.log(`Manager (${this.employeeName}) delegating task....`);
    }
}


let mg = new Manager('Andreaa');
mg.delegateWork();
mg.greet();


//lets say i want to create a new Class. .... 

class Office {
    protected staffStrength;
    protected manager;
    constructor(manager:Manager){
        this.staffStrength = {};
        this.manager = manager;
    }
    fixStaffs(){
        this.staffStrength = {"men":10, "women":20};
        return this.staffStrength;
    }
    address(){
        let addrstr = (this.manager)?'manager says' : '~~';
        console.log(`${addrstr}, That the Address is, 1 Kofo Abayomi, VI, Lagos`);
    }
}