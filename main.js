"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'amin man world'; //tsc main.ts --watch  //~ persist compiler..
console.log(message);
//then it generates a js file and you can include in your work... 
var x = 10;
var y = 20;
var sum;
var title = ' aminu'; //const declarations must be assisgned... 
//boolean, number, string ~ basic types in typestctipt.. 
var isBeginner = true;
var total = 0;
var name = 'vishhhh...';
var sentence = "My name is " + name;
var isNew = null;
var myName = undefined;
//ways of declaring arrays in typescript..
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//problem with tuple types... 
//one string value and one number and must match. 
//you cant swap or do a mixed length.. 
var person1 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//to change indexes ... 
var xColor;
(function (xColor) {
    xColor[xColor["Red"] = 6] = "Red";
    xColor[xColor["Green"] = 7] = "Green";
    xColor[xColor["Blue"] = 8] = "Blue";
})(xColor || (xColor = {}));
;
var d = xColor.Blue;
console.log(d);
/// or any:type ~ eencompasses all types.. 
var randomVal = 10;
randomVal = true;
randomVal = 'hello';
//randomVal.toUpperCase();
// it could also be a function 
//randomVal();
//another type unknown... 
var untp = 34; //unknown types cant have properties... 
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(untp)) {
    console.log(untp.name);
}
//untp.toUpperCase  -- gives error.. 
// let tx = (untp as string).toUpperCase();
var multiType; //setting multiple types to a variable.. 
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
//multitype ~ helps with intellisence.. 
///////////////////////////functions in VS Code.. 
// ? - makes the parameter optional... 
function add(num1, num2) {
    return (num2) ? num1 + num2 : num1;
}
//optional parameters cannot be initialized... 
//e.g. num2?:number = 10 ---- error. 
//default parameters... //num2 - default. 
function addD(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return (num2) ? num1 + num2 : num1;
}
add(5, 10);
add(5);
// add(5,'10'); //error.s.. 
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'Louis',
    lastname: 'lane'
};
fullName(p);
;
function profile(person) {
    console.log(person.firstname + " " + person.lastname);
}
var xp = {
    firstname: 'Martha'
};
profile(xp);
////////////////////////////// ~ classes... 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.getDetails = function () {
        return {
            "name": this.employeeName,
            "position": "employee"
        };
    };
    Employee.prototype.greet = function () {
        console.log("good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('salama..');
console.log(emp1.getDetails());
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managersName) {
        return _super.call(this, managersName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager (" + this.employeeName + ") delegating task....");
    };
    return Manager;
}(Employee));
var mg = new Manager('Andreaa');
mg.delegateWork();
mg.greet();
//lets say i want to create a new Class. .... 
var Office = /** @class */ (function () {
    function Office(manager) {
        this.staffStrength = {};
        this.manager = manager;
    }
    Office.prototype.fixStaffs = function () {
        this.staffStrength = {
            "men": 10,
            "women": 20,
            "kids": 3
        };
        return this.staffStrength;
    };
    Office.prototype.address = function () {
        var addrstr = (this.manager) ? 'manager says' : '~~';
        console.log(addrstr + ", That the Address is, 1 Kofo Abayomi, VI, Lagos");
    };
    return Office;
}());
