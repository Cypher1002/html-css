const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});


  const num1 =  20 ;
const num2  =  30;
 const name  =  'ajay';

 function mutiply(){
  return num1*num2;
 }

 console.log(mutiply())

 function doMath(a,b){

  let num1 =  30;
  let num2  =  90;

    function add(){
      return `${name} scored ${num1+num2} marks`
    }
    return add();

 }

 console.log(doMath(20,90));


 ///function calling itself 
 const recursive  = function(n){
  if(n===0 || n===1 ){
    return 1;
  }
  return n*recursive(n-1);
 }

 console.log(recursive(9));

//definoing normal function 
 function recurs(n){

  if(n===0 || n===1 ){
    return 1;
  }
  return n*recursive(n-1);

 }

 console.log(recurs(5));


 //creating a nested function 

 function minus(p,q){
    const square = function squaring(x){
            return x*x;
    }

    return square(p)  - square(q);
 }

 console.log(minus(2, 3));



 function one(a){
    function two(b){
       return a+ b;
    }

    return two;
 }

//  const  call = one(5);
 console.log(one(4)(5));


//the function should be returned inside the scope outside the scope it will not work
 function a(x){
   function b(y){
    function c(z){
      return x+y+z;
    }
    return c;
   }
    return b;
 }
 console.log(a(1)(2)(3));



//  function concat(separator){
//   let result = "";

//   for(let i =0; i<arguments.length;i++){
//     result += arguments[i] + separator;
//   }
//  }

//  console.log(concat(":", "red", "blue", "green", "yellow"));

// functions are use dto execute some code on basis of given conditions
 

// they are defined as ;

function myfunct(x, y , z){
  return x+y+z;
}

console.log(myfunct(9,0,4));

//other way 
const func =  function(x, y){
  return x +y;
}
console.log(func(9,1));

//one more variation
 const fun =  function funck(z ,y){
  return z *y;
 }
 console.log(fun(12,5));
 console.log(fun(12,2));

 
 //arrow functions 
 const func1 = (a,b)=>{
  return a+b;
 }

 console.log(func1(2,5));


 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //strings 
   let styrings =  "we are viking and leave \\baba from the north " 
   console.log(styrings)
     ///string methods 
     //1 string.slice() == will remove the no of char we mentioned from the string
    //  last not included ;
   let x  =  new String("bharat mata ki jai");
    console.log(x.slice(7, 10));

    // substr extract the part which we want last one included 

    console.log(x.substr(3))
    // last one not included
    let w = "5";
    console.log(w.padStart(3,0))
    console.log(x.charAt(2))

    //finding a substring in a given string
    let m =  "hello world";

    if(m.includes("b")){
      console.log("found")
    }else{
      console.log("not found ")
    }

    //indexOF-- gives the index of the substring which we want 
    let u =  "mdn-web docs for developers by developers";
    console.log(u.indexOf("for"));
    console.log(u.slice(5))//if we give one paramemter then after theta all string will appear
    console.log(u.substring(2,9))
    console.log(u.toUpperCase())


   let a1 =  10;
   let a2 =  20;
   let a3 = "actual price margin"
   console.log(`the total price of the given article is ${(a1+a2)*(50/100)} percent in ${a3} of the article`);


   ////////////////////////////////////////////arrays//////////////////////////////////////////////////////////////
  //  variables hold more than one value 
  let nums =  [12, 45, 90, 87, 56]
  console.log(nums)
  console.log(nums[2])
  console.log("the value of length of array is: " ,nums.length)

  for(let i = 0 ; i<nums.length; i++){
    console.log(nums[i]);
  }

  //array methods 
//toString  converts a array to string
console.log(nums.toString())

//joins arrays using a seprator 
let numjoin = "|";
console.log(nums.join(numjoin), typeof nums);

//shift() - removes first element and return it 
// let r =  nums.shift();
// console.log(r, nums );

// unshift() adds a element to teh start of the array
console.log(nums.unshift(23), nums);

delete nums[0];
console.log(nums, nums.length)

