var convertform = document.querySelector(".registerForm");
var selectt= document.querySelector('.exchange');
console.log(selectt)
convertform.onsubmit=function(e){
    e.preventDefault();
 var elementss= e.target.elements;
var amount=elementss[0].value;
console.log(amount);
   
   
    var exchangeamount;
if(elementss[1].value=="dollar"){
    exchangeamount=amount/3;
    
}
else if( elementss[1].value=="dinar"){
    exchangeamount=amount/5;
    
} else if (elementss[1].value=="nis"){
    exchangeamount=amount;
    

}
document.querySelector(".result").innerHTML=exchangeamount;
}
