    



let createDiv = (size) => {
    const container = document.querySelector("#container");
    
    
    for(let d = 0; d < size * size; d++ ){
        const box = document.createElement("div")
        box.classList.add("box")
         box.style.width =`${960/size}px`;
        box.style.height =`${960/ size}px`;


       
   
         box.addEventListener("mouseover", () =>{
            box.style.background = "blue"; 
            
        })

         container.appendChild(box);

    }

      

    
}

    

   




createDiv(64);