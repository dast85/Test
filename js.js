let ekran = document.getElementById("ekran");

let zero = document.getElementById("zero");

zero.addEventListener("click", function () {
  ekran.innerHTML += 0;
});

let one = document.getElementById("one");

one.addEventListener("click", function(){
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 1;
  }else{
    ekran.innerHTML += 1;
  }
});

let two = document.getElementById("two");

two.addEventListener("click", function(){
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 2;
  }else{
    ekran.innerHTML += 2;
  }
});

let three = document.getElementById("three");

three.addEventListener("click", function(){
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 3;
  }else{
    ekran.innerHTML += 3;
  }
});

let four = document.getElementById("four");

four.addEventListener("click", ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 4;
  }else{
    ekran.innerHTML +=4;
  }
});

let five = document.querySelector("#five");

five.addEventListener("click", ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 5;
  }else{
    ekran.innerHTML += 5;
  }
});

let six = document.getElementById('six');

six.addEventListener('click', ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 6;
  }else{
    ekran.innerHTML +=6;
  }
});


let seven = document.getElementById('seven');

seven.addEventListener('click', ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 7;
  }else{
    ekran.innerHTML +=7;
  }
});

let eight = document.getElementById('eight');

eight.addEventListener('click', ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 8;
  }else{
    ekran.innerHTML += 8;
  }
});

let nine = document.getElementById('nine');

nine.addEventListener('click', ()=>{
  if(ekran.innerHTML == 0){
    ekran.innerHTML = 9;
  }else{
    ekran.innerHTML += 9;
  }
});

let equal = document.getElementById('equal');

equal.addEventListener('click', ()=>{
  ekran.innerHTML = eval(ekran.innerHTML)
});

let minus = document.getElementById('minus');

minus.addEventListener('click', ()=>{
  let lastElement = ekran.innerHTML[ekran.innerHTML.length-1];
  if(lastElement != '+' && lastElement != '.' && lastElement != '-' && lastElement != '/' && lastElement != '*'){
    ekran.innerHTML += '-';
  }

  
});

let plus = document.getElementById('plus');

plus.addEventListener('click', ()=>{
  let lastElement = ekran.innerHTML[ekran.innerHTML.length-1];
  if(lastElement != '+' && lastElement != '.' && lastElement != '-' && lastElement != '/' && lastElement != '*'){
    ekran.innerHTML += '+';
  }

  
});

let divide = document.getElementById('divide');

divide.addEventListener('click', ()=>{
  let lastElement = ekran.innerHTML[ekran.innerHTML.length-1];
  if(lastElement != '/' && lastElement != '*' && lastElement != '+' && lastElement != '-' && lastElement != '.'){
    ekran.innerHTML += '/';
  }
});

let multiply = document.getElementById('multiply');

multiply.addEventListener('click', () =>{
  let lastElement = ekran.innerHTML[ekran.innerHTML.length-1];
  if(lastElement != '+' && lastElement != '-' && lastElement != '*' && lastElement != '/' && lastElement != '.'){
    ekran.innerHTML += '*';
  }
});

let cut = document.getElementById('cut');

cut.addEventListener('click', ()=>{
  ekran.innerHTML = ekran.innerHTML.slice(0, -1);
  if(ekran.innerHTML < 1){
    ekran.innerHTML = 0;
  }
});

let clear = document.getElementById('clear');

clear.addEventListener('click', ()=>{
  ekran.innerHTML = 0;
});

let dot = document.getElementById('dot');

dot.addEventListener('click', ()=>{
  let lastElement =  ekran.innerHTML[ekran.innerHTML.length-1];
  let str = ekran.innerHTML.split('+').join(',').split('/').join(',').split('*').join(',').split('-').join(',').split(',');
    if (!str[str.length-1].includes('.') && lastElement != '+' && lastElement != '-' && lastElement != '*'
    && lastElement != '/'){
        ekran.innerHTML += '.';
    }
});
  







// let dot = document.getElementById("dot");
// dot.addEventListener("click", function () {
//     let lastElement =  display.innerHTML[display.innerHTML.length-1];
//     let str = display.innerHTML.split('+').join(',').split('/').join(',').split('*').join(',').split('-').join(',').split(',');
//     if (!str[str.length-1].includes('.') && lastElement != '+' && lastElement != '-' && lastElement != '*'
//     && lastElement != '/'){
//         display.innerHTML += '.';
//     }
// });