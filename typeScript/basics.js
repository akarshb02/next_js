export {}
function add(num:number) {
 return num + 9;

}
console.log(add(6)); 

let isBeginner:boolean = true


console.log(isBeginner);
let total: number = 1;
let name :string =  'xyz';
let sentence : string =`My name is ${name} I am a beginner in Typescript`;
console.log(sentence);

let list:number[] =[1,2,3,4];
let list1:Array<number> = [1,2];

//mixed type

let person:[string,number,number] = ['cha',11,1]

enum color{redd,green};    //enum starts with 0
let c:color= color.green;
console.log(c);


let randomValue: any = 10;

randomValue =  false;
randomValue =  'random';
console.log(randomValue);


//multy Type
let multiType: number|boolean;
multiType=true;


//interfaces
interface Person{
 firstName:string;
 lastName?:string;   //for optional we use ?
}

function fullName(perrson:Person) {
 console.log(`${perrson.firstName} ${perrson.lastName}`);
 
}

let p ={
 firstName : 'bruce',
 last : 'wayne'
}

fullName(p)



class Emp {
 employeeName:string;

 constructor(name:string){
  this.employeeName=name
 }
 greet(){
  console.log(`good ${this.employeeName}`);
  
 }
}
let emp1 = new Emp('newMember')
console.log(emp1.employeeName);
emp1.greet()

class Manager extends Emp {


 constructor(ManagerName:string){
      super(ManagerName)
 }

 work(){
  console.log('task completed');
  
 }
}
 let m1 = new Manager('ganesh')

 m1.greet();
 console.log(m1.employeeName);






