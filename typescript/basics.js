"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
function add(num) {
    return num + 9;
}
console.log(add(6));
var isBeginner = true;
console.log(isBeginner);
var total = 1;
var name = 'xyz';
var sentence = "My name is " + name + " I am a beginner in Typescript";
console.log(sentence);
var list = [1, 2, 3, 4];
var list1 = [1, 2];
//mixed type
var person = ['cha', 11, 1];
var color;
(function (color) {
    color[color["redd"] = 0] = "redd";
    color[color["green"] = 1] = "green";
})(color || (color = {}));
; //enum starts with 0
var c = color.green;
console.log(c);
var randomValue = 10;
randomValue = false;
randomValue = 'random';
console.log(randomValue);
//multy Type
var multiType;
multiType = true;
function fullName(perrson) {
    console.log(perrson.firstName + " " + perrson.lastName);
}
var p = {
    firstName: 'bruce',
    last: 'wayne'
};
fullName(p);
var Emp = /** @class */ (function () {
    function Emp(name) {
        this.employeeName = name;
    }
    Emp.prototype.greet = function () {
        console.log("good " + this.employeeName);
    };
    return Emp;
}());
var emp1 = new Emp('newMember');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(ManagerName) {
        return _super.call(this, ManagerName) || this;
    }
    Manager.prototype.work = function () {
        console.log('task completed');
    };
    return Manager;
}(Emp));
var m1 = new Manager('ganesh');
m1.greet();
console.log(m1.employeeName);
