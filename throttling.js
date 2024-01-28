
        var rect = document.querySelector("#centre");
 
        // Throttling Function
        const throttleFunction = (func, delay) => {
 
            // Previously called time of the function
            let prev = 0;
            return (...args) => {
                // Current called time of the function
                let now = new Date().getTime();
 
                // Logging the difference
                // between previously 
                // called and current called timings
                console.log(now - prev, delay);
 
                // If difference is greater
                // than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;
 
                    // "..." is the spread
                    // operator here 
                    // returning the function with the 
                    // array of arguments
                    return func(...args);
                }
            }
        }
        rect.addEventListener("mousemove",
            throttleFunction((details) => {
                // console.log("button is clicked") 
                var div = document.createElement("div"); 
                div.classList.add("imagediv"); 
                document.body.appendChild(div);  
                div.style.left = details.clientX+"px";  
                div.style.top = details.clientY+"px";  
                setTimeout(function(){div.remove()},2000);  

                var img = document.createElement('img'); 
                img.setAttribute("src","https://th.bing.com/th/id/OIP.aeh2eTW9ot4jykqnJj-mfwAAAA?rs=1&pid=ImgDetMain"); 
                div.appendChild(img);  

                gsap.to(img,{
                    y: "0", 
                    ease : Power2,
                    duration : .4
                });  
                gsap.to(img,{
                    y:'100%', 
                    delay: .8, 
                    ease: Power3, 
                    duration : .10
                }); 

            }, 350));