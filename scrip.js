function add(args){
    document.getElementById(args).innerHTML=parseInt(document.getElementById(args).value)+1;
    document.getElementById("total").innerHTML=parseInt(document.getElementById("total").value)+1;
}
function sub(args){
    if(parseInt(document.getElementById(args).value)>=1){
        document.getElementById(args).innerHTML=parseInt(document.getElementById(args).value)-1;
        document.getElementById("total").innerHTML=parseInt(document.getElementById("total").value)-1;
    }
}