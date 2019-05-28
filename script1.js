
//Items
var item=[{
    id :"1",
    name :"shoe",
    price : "200",
    image :"1.jpeg"
},{
    id: "2",
    name :"belt",
    price : "100",
    image :"2.jpeg"
},{
    id : "3",
    name :"shirt",
    price : "300",
    image :"3.jpeg"
},{
    id: "4",
    name :"pant",
    price : "350",
    image :"4.jpeg"
}];

//HTML Content

cart_update ={
  cart:function(){
    var htmlContent = "<h1>SHOPPING CART</h1><br>";
    htmlContent+="<div>";
    htmlContent+="<div> <h2>TOTAL ITEMS :</h2></div>";
    htmlContent+="<div> <textarea id=\"total\" name=\"total\">0</textarea></div>";
    htmlContent+="</div><br>";
    for(var i=0;i<item.length;i++){ 
      htmlContent+="<b >"+item[i].name+"  -  Rs : "+item[i].price+"</b>";
      htmlContent+="<div class='prods'>"
      htmlContent+="<div id=\""+item[i].name+"_div\">";
      htmlContent+="<img src="+item[i].image+">";
      htmlContent+="<button onclick=\"cart_update.add('"+item[i].name+"')\">+</button>";
      htmlContent+="<textarea name="+item[i].name+" id="+item[i].name+">0</textarea>";
      htmlContent+="<button  onclick=\"cart_update.sub('"+item[i].name+"')\">-</button>";
      htmlContent+="<button  onclick=\"del('"+item[i].name+"')\">Delete</button>";
      htmlContent+="</div><br><br></div>"
  
  
      // $('.content').append('<div>tst...</div>');
    }
    document.getElementById('content').innerHTML = htmlContent;
  
  },
  add: function(args){
    document.getElementById(args).innerHTML=parseInt(document.getElementById(args).value)+1;
    document.getElementById("total").innerHTML=parseInt(document.getElementById("total").value)+1;
  },
  sub: function(args){
    if(parseInt(document.getElementById(args).value)>=1){
    document.getElementById(args).innerHTML=parseInt(document.getElementById(args).value)-1;
    document.getElementById("total").innerHTML=parseInt(document.getElementById("total").value)-1;
  }
  }
 
};

