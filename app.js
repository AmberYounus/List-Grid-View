var col = document.getElementsByClassName("column");
 var i;
 function listView(){
    for (let i = 0; i < col.length; i++) {
        col[i].style.width="100%";
        
    }
 }

 function gridView(){
    for (let i = 0; i < col.length; i++) {
        col[i].style.width="50%";
        
    }
 }

 var container = document.getElementById("container");
 var btns = document.getElementsByClassName("btn");
 for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","")
     });
    
 }

 document.getElementById("heading").style.textAlign ="center";
 document.getElementById("heading").style.fontSize ="35px";
 document.getElementById("heading").style.color ="#00cbff";
 document.getElementById("heading").style.textDecorationLine ="underline";
 document.getElementById("heading").style.textDecorationColor ="rgb(165, 165, 93)";