function cal(){
var no1,no2,res;
no1=Number(document.getElementById("num1").value);
no2=Number(document.getElementById("num2").value);

if(document.getElementById("sym").value=="+"){
res=no1+no2;
}
if(document.getElementById("sym").value=="-"){
res=no1-no2;
}
if(document.getElementById("sym").value=="*"){
res=no1*no2;
}
if(document.getElementById("sym").value=="/"){
res=no1/no2;
}
if(document.getElementById("sym").value=="%"){
res=no1%no2;
}
if(document.getElementById("sym").value==""){
res="Enter  a symbol";
}
document.getElementById("result").value=res;
}
