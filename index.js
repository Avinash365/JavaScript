var rect = document.querySelector("#center");  

rect.addEventListener("mousemove",function(details){
     var rectangular = rect.getBoundingClientRect(); 
     var mouseLocation =   details.clientX - rectangular.left;  
    //  console.log(mouseLocation); 
    if(mouseLocation == rectangular.width/2){
        rect.style.backgroundColor = "white";
    }
    else if(mouseLocation < rectangular.width/2){
       var redcolor=gsap.utils.mapRange(0,rectangular.width/2,255,0,mouseLocation) 
       gsap.to(rect,{backgroundColor:`rgb(${redcolor},0,0)`,ease:Power4,})
        
    } 
    else{
       var bluecolor=gsap.utils.mapRange(rectangular.width/2,rectangular.width,0,255,mouseLocation) 
       gsap.to(rect,{backgroundColor:`rgb(0,0,${bluecolor})`,ease:Power4,})
    }

});  

rect.addEventListener("mouseleave",function(){ 
    rect.style.backgroundColor = "white"; 
})
