const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navmenu.classList.remove("active");
}))


// function alertFunction() {
//   alert("thanks for submitting the formm we will notify you shortly!")
  
// }

//prevents from submitting the form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const error1 = document.getElementById('error');
const error2 = document.getElementById("error_1");

form.addEventListener('submit',(e)=>{
   checkInput()
    e.preventDefault();
})

function checkInput() {
  const nameVal = name.value.trim()
  const emailVal = email.value.trim()
  var validRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var regexpart = /@[a-zA-Z0-9-]/
   
   if(!nameVal){
    error1.style.color ="yellow";
    error1.innerHTML = "name cannot be empty";
   }else{
       error1.innerHTML ="";
   }
   
   if(emailVal === "" ){
    error2.style.color ="yellow";
     error2.innerHTML = "email cannot be empty";
   }else if(!emailVal.match(validRegex)){
    
    error2.style.color ="yellow";
     error2.innerHTML = "invalid email address";
   }else if(emailVal.regexpart<4){
    
    error2.style.color ="yellow";
    error2.innerHTML = "PLEASE WRITE CORRECT EMAIL";
   }
   else{
    error2.innerHTML ="";
}
}


let array=['a','b','c']
for(let i=0;i<array.length(); i++){
  if(arr[i]=="b"){
    console.log("found");
  }

  array[0] ="c";
  array.push("e");


}

  // found this on mdn docs //constain validation API
  // // 

  // email.addEventListener("input", (event) => {
  //   if (email.validity.typeMismatch) {
  //     email.setCustomValidity("I am expecting an email address!");
  //   } else {
  //     email.setCustomValidity("");
  //   }
  // });

