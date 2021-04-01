//ES5
let WelcomeES5=function(){
    console.log('Hello ES5');
}
WelcomeES5();

//ES6
let WelcomeES6=()=>{
    console.log('Hello ES6');
}

WelcomeES6();

//with parameters
let multiplyES5=function(x,y){
    return x*y;
}

console.log(multiplyES5(5,6));

let multiplyES6=(x,y)=>x*y;

console.log(multiplyES6(2,3));


let splitES5=function(text){
    return text.split(' ');
}
console.log(splitES5("Modern JavaScript Kursu"));

let splitES6=(text)=>text.split(' ');

console.log(splitES6("Modern Javascript Kursu"));

//Object Literals

let getProductsES5=function(id,name){
    return {
        id:id,
        name:name
    }
}

console.log(getProductsES5(2,"Samsung S8"));

let getProductsES6=(id,name)=>({
    id:id,
    name : name
})

console.log(getProductsES6(3,"Iphone X"))



  const phones=[
      {name:'IPhone 8',price:3000},
      {name:'IPhone 7',price:2500},
      {name:'IPhone 6',price:2000},
      {name:'IPhone 5',price:1500}
  ]

  let pricesES5 = phones.map(function(phone){
      return phone.price;
  })
  console.log(pricesES5);

  let priceES6=phones.map(phone=>phone.price);
  console.log(priceES6);

  const arr=[1,2,3,5,7,8,9,88,66,55,44,33];

  let evenES5=arr.filter(function(a){
      return a%2==0;
  })

  console.log(evenES5);

  let evenES6=arr.filter(a=>a%2==0);

  console.log(evenES6)



  //this keyword

  let list ={
      category:'phone',
      names:['Iphone 8','Samsung S8','Iphone 7'],
      call : function(){
          this.names.map((name)=>{
              console.log(`${this.category} ${name}`)
          })
      }
  }

  list.call();
/*
  function Game(){
      this.live=0;
      this.addLive=function(){
       this.OneUp=setInterval(() => {
              console.log(++this.live)
          }, 1000);
      }
  }

  let player=new Game();
  player.addLive();*/

//spread op
  function getTotal(a,b,c){
      return a+b+c;
  }
  console.log(getTotal());

  let numbers=[10,20,30];
//es5
  console.log(getTotal.apply(null,numbers));
//es6
  console.log(getTotal(...numbers));

  let arr1=['one','two'];
  let arr2=['three','four','five']

  let arr3=[...arr1,...arr2];
  console.log(arr3);


//Rest parameters

function sum(...arr){
    let result=0;

    arr.forEach(item => {
        result+=item;
    });
    return result;
}

console.log(sum(10,20,30,40));
//************************************** */

const boxes=document.querySelectorAll('.box');

Array.from(boxes).forEach(box => 
    box.style.backgroundColor='red');

console.log(boxes);

let boxesES6=Array.from(boxes);

for(let box of boxesES6){ //for metoduna alternatif
    if(box.className=='box blue'){
        continue;
    }
    box.textContent="I'm changed"
    box.style.backgroundColor='green'
}
//from
//let arr10 =Array.from('Modern JavaScript'); //Array.from() metodu bir dizi-benzeri veya gezinilebilir bir nesneden yeni bir Dizi örneği oluşturur.
//console.log(arr10);

const prod=[
    {name:'Gm 5',price:1500},
    {name:'Samsung S9',price:3000},
    {name:'LG note',price:2500}
]

console.log(Array.from(prod,prd=>prd.price))
console.log(prod.find(prd=>prd.name=='Gm 5'))

//Map : key/value pairs(collection)


let val;

const numbersss=new Map();
numbersss.set(1,'one')
numbersss.set(2,'two')
numbersss.set(3,'three')
val=numbersss

console.log(val)



// classes 

//es5

var PersonES5=function(name,job,yob){
    this.name=name
    this.job=job
    this.yob=yob
}

PersonES5.prototype.calculateAge=function(){
   return 2021-this.yob;
}

var tefo=new PersonES5('Teyfik','Computer Engineer',1996)

console.log(tefo.calculateAge())

//ES6

class PersonES6{
    constructor(name,job,yob){
        this.name=name
        this.job=job
        this.yob=yob
    }
    calculateAge(){
        return 2021-this.yob
    }
}

let emel=new PersonES6('Emel','Teacher',1989)

console.log(emel)


//ES6 alt sınıf ve kalıtım


class PersES6{
    constructor(fName,lName){
        this.fName=fName
        this.lName=lName
    }
    sayHi(){
        return `Hello I am ${this.fName} ${this.lName}`
    }
}

class CustomerES6 extends PersES6{
    constructor(fName,lName,phone,uName){
        super(fName,lName);
        this.phone=phone;
        this.uName=uName
    }
}

let custmer1=new CustomerES6('Teyfik','Baba','05533121121','kabileziken')

console.log(custmer1)
console.log(custmer1.sayHi())//proto kısmını ekstra yazmıyoruz es5 te yazıyorduk 
