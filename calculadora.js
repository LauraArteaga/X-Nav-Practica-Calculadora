$(document).ready(function(){

  disTxt=document.getElementById("displayText");
/*  document.onkeydown = keyboard;*/

  display = "0";
  newNumber = "1";
  coma = "0";
  auxNumber = "0";
  ansNumber = "0";
  op = "no";


  $(".operation").click(function(){operation($(this).val())});
  $(".number").click(function(){number($(this).val())});
  $(".equal").click(function(){equal()});
  $(".opposed").click(function(){opposed()});
  $(".inverse").click(function(){inverse()});
  $(".percent").click(function(){percent()});
  $(".squareRoot").click(function(){squareRoot()});
  $("#C").click(function(){deleteALL()});
  $("#CE").click(function(){del()});
  $("#ANS").click(function(){ans()});
  $("body").keypress(function(event){keyboard(event)});


  function keyboard(event){
    key = event.which;
    charKey = String.fromCharCode(key);
    console.log(key)

    if(key==43 || key==42 || key==47 || key==45){
      operation(charKey);
    }else if(event.keyCode==13){
      equal();
    }else if(key>47 && key<58){
      number(charKey);
    }else if(key==46){
      number(".");
    }
  }

  function number(n) {
     if (display=="0" || newNumber=="1" ) {
        disTxt.innerHTML=n;
        display=n;
        if (n==".") {
          disTxt.innerHTML="0.";
          display=n;
          coma=1;
          }
      }else{
       if (n=="." && coma==0) {
           disTxt.innerHTML+=n;
           display+=n;
           coma=1;
       }else if (n=="." && coma==1) {

       }else{
           disTxt.innerHTML+=n;
           display+=n;
       }
    }
    newNumber=0
  }

  function operation(operator){
    auxNumber=display;
    display=operator;
    op = operator;
    disTxt.innerHTML=display;
    newNumber="1";
    coma="0";
  }

  function squareRoot() {
    result=Math.sqrt(display);
    if(isNaN(result)){
      disTxt.innerHTML="Math error";
    }else{
      disTxt.innerHTML=result;
      display=result;
      ansNumber=result;
    }
    newNumber="1";
    coma="0";
  }

  function opposed() {
    num=Number(display);
    result=-num;
    display=String(result);
    disTxt.innerHTML=display;
  }

  function inverse() {
    result=Number(display);
    result=(1/result);
    display=String(result);
    ansNumber=display;
    disTxt.innerHTML=display;
    newNumber="1";
  }

  function percent() {
    result=display/100;
    disTxt.innerHTML=result;
    display=result;
    ansNumber=result;
    newNumber="1";
  }

  function equal(){
    result=eval(auxNumber+op+display);
    if(isNaN(result)){
      disTxt.innerHTML="Math error";
    }else{
      disTxt.innerHTML=result;
      display=result;
      ansNumber=result;
    }
    op="no";
    auxNumber="0";
    newNumber="1";
    coma="0";
  }

  function deleteALL(){
    display="0";
    coma="0";
    op="no";
    newNumber="1";
    disTxt.innerHTML=display;
  }

  function del(){
    long = display.length;
    if(display[long-1] == "."){
      coma="0";
    }
    if(long-1==0){
      newNumber="1";
    }
    display = display.substring(0, long-1);
    disTxt.innerHTML=display;
  }

  function ans() {
    disTxt.innerHTML=ansNumber;
    display=ansNumber;
    newNumber="1";
  }

});
