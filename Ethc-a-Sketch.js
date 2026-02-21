    



let createDiv = (size) => {
    const container = document.querySelector("#container");
    const boxSize = Math.floor(800 / size); 

    const boxesPerRow = Math.floor(800 / boxSize);  // How many boxes per row
    const boxesPerColumn = Math.floor(800 / boxSize); // how many boxers per column



    for(let d = 0; d < boxesPerRow * boxesPerColumn; d++ ){
        const box = document.createElement("div")
        box.classList.add("box")
         box.style.width =`${boxSize}px`;
        box.style.height =`${boxSize}px`;


       
   
         box.addEventListener("mouseover", () =>{
            box.style.background = "blue"; 
            
        })

         container.appendChild(box);

    }

      

    
}

    

   




createDiv(16);