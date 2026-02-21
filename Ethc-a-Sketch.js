



let createDiv = (size) => {
    const container = document.querySelector("#container");
    const boxSize = Math.floor(800 / size); 

    container.innerHTML = "";// refresh current html 

    const boxesPerRow = Math.floor(800 / boxSize);  // How many boxes per row
    const boxesPerColumn = Math.floor(800 / boxSize); // how many boxers per column

   

    for(let d = 0; d < boxesPerRow * boxesPerColumn; d++ ){
        const box = document.createElement("div")
        box.classList.add("box")
         box.style.width =`${boxSize}px`;
        box.style.height =`${boxSize}px`;

    let R= Math.floor(Math.random() * 256)
    
    let B = Math.floor(Math.random() * 256)

    let G = Math.floor(Math.random() * 256)
    let randomColor ="rgb("+ R + "," + B + "," + G + ")";

       
   
         box.addEventListener("mouseover", () =>{
            box.style.backgroundColor = randomColor;
            box.style.opacity = 0.33;
            
        })

         container.appendChild(box);

    }

      

    
}

let resize = () => {
    const button = document.querySelector("button");


    button.addEventListener("click", () =>{
         size = Number(prompt("please enter a number 1-100"))
        
         createDiv(size)
    })
}



createDiv(16);


resize();

    

