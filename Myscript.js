var total=0,shoe1=0,belt1=0,shirt1=0,pant1=0;
//var tot=document.total.value;
var shoe=document.shoe1.value;

function sadd(){
    total=total+1;
    shoe1=shoe1+1;
    document.getElementById("shoe").innerHTML=shoe1;
    document.getElementById("total").innerHTML=total;

}
function ssub(){
if(shoe1>=1){
    total=total-1;
    shoe1=shoe1-1;
    document.getElementById("shoe").innerHTML=shoe1;
    document.getElementById("total").innerHTML=total;
}
}

function badd(){
    total=total+1;
    belt1=belt1+1;
    document.getElementById("belt").innerHTML=belt1;
    document.getElementById("total").innerHTML=total;

}
function bsub(){
if(belt1>=1){
    total=total-1;
    belt1=belt1-1;
    document.getElementById("belt").innerHTML=belt1;
    document.getElementById("total").innerHTML=total;

}
}

function shadd(){
    total=total+1;
    shirt1=shirt1+1;
    document.getElementById("shirt").innerHTML=shirt1;
    document.getElementById("total").innerHTML=total;

}
function shsub(){
if(shirt1>=1){
    total=total-1;
    shirt1=shirt1-1;
    document.getElementById("shirt").innerHTML=shirt1;
    document.getElementById("total").innerHTML=total;
}
}

function padd(){
    total=total+1;
    pant1=pant1+1;
    document.getElementById("pant").innerHTML=pant1;
    document.getElementById("total").innerHTML=total;

}
function psub(){
if(pant1>=1){
    total=total-1;
    pant1=pant1-1;
    document.getElementById("pant").innerHTML=pant1;
    document.getElementById("total").innerHTML=total;
}
}