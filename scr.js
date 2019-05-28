var total=0,shoe1;
function add(args){
    total=total+1;
    if(args=="shoe"){
    shoe1=document.shoe1.value;
    document.getElementById(args).innerHTML="2";
    }
    if(args=="belt"){
        belt1=belt1+1;
        document.getElementById(args).innerHTML=belt1;
    }
    if(args=="shirt"){
        shirt1=shirt1+1;
        document.getElementById(args).innerHTML=shirt1;
    }
    if(args=="pant"){
        pant1=pant1+1;
        document.getElementById(args).innerHTML=pant1;
    }
    document.getElementById("total").innerHTML=total;
}
function sub(args){
if(args=="shoe"  && shoe1>=1){
    total=total-1;
    shoe1=shoe1-1;
    document.getElementById(args).innerHTML=shoe1;
}
if(args=="belt"  && belt1>=1){
    total=total-1;
    belt1=belt1-1;
    document.getElementById(args).innerHTML=belt1;
}
if(args=="shirt"  && shirt1>=1){
    total=total-1;
    shirt1=shirt1-1;
    document.getElementById(args).innerHTML=shirt1;

}
if(args=="pant"  && pant1>=1){
    total=total-1;
    pant1=pant1-1;
    document.getElementById(args).innerHTML=pant1;

}
document.getElementById("total").innerHTML=total;
}