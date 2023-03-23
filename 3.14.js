let pi=1;
let i=3;
let op="-";
setInterval(function(){
  pi=eval(`${pi}${op}(1/${i})`);
  console.log(pi*4);
  i+=2;
  if(op=="-"){
    op="+";
  }else{
    op="-";
  }
},10);
