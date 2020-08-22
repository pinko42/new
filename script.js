let x = document.getElementById("email");
let y = document.getElementById("password")
let z = document.getElementById("button");
//console.log(x.value);
function login() {
    if (x.value === "moh" && y.length>4){
        console.log("hii");
        document.getElementById("after").style.display = "none";
        document.getElementById("sucess").style.display ="flex";
        
        
    }else{
        var para = document.createElement("p");
var node = document.createTextNode("err");
para.appendChild(node);
var element = document.getElementById("login");
//element.appendChild(para);
element.insertBefore(para,z);

    }
    

}