const secondhand = document.querySelector('.second_hand'); 
const minshand = document.querySelector('.min_hand'); 
const hourhand = document.querySelector('.hour_hand'); 

function setDate() {
    const now = new Date(); 

    const second = now.getSeconds(); 
    const secondDegrees = ((second/60)*360)+90; 
    secondhand.style.transform = `rotate(${secondDegrees}deg)`;   

    const mins = now.getMinutes();
    const minsDegree = ((mins/60)*360)+((second/60)*6)+90; 
    minshand.style.transform = `rotate(${minsDegree}deg)`; 

    const hour = now.getHours(); 
    const hourDegree = ((hour/12)*360)+((mins/60)*30)+90;    
    hourhand.style.transform = `rotate(${hourDegree}deg)`; 

} 
setInterval(setDate,1000); 
setDate(); 
