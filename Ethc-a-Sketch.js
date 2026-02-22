


// function to make a div and append it;
let createDiv = (size) => {

    // adding my container 
    const container = document.querySelector("#container"); 
    // size for box to fit in container nicely 
    const boxSize = Math.floor(800 / size); 
    // refresh current html 
    container.innerHTML = "";

    // How many boxes per row
    const boxesPerRow = Math.floor(800 / boxSize); 
    
    // how many boxers per column
    const boxesPerColumn = Math.floor(800 / boxSize); 

   
    //for loop to loop making as many boxes i need ie 16*16 = 256 boxes
    for(let d = 0; d < boxesPerRow * boxesPerColumn; d++ ){
        //creating div element 
        const box = document.createElement("div")

        //adding a class called box to it
        box.classList.add("box")

        // styling width and height of the divs
        box.style.width =`${boxSize}px`;
        box.style.height =`${boxSize}px`;


        // RGB random number so it makes a random rgb number
        let R= Math.floor(Math.random() * 256)
        
        let B = Math.floor(Math.random() * 256)

        let G = Math.floor(Math.random() * 256)
        let randomColor ="rgb("+ R + "," + B + "," + G + ")";

       
        //event listener that on mouse over div element so it changes color 
         box.addEventListener("mouseover", () =>{
            //styles for backgorund color on mouse over
            box.style.backgroundColor = randomColor;
            box.style.opacity = 0.33;
            
        })

        
         container.appendChild(box);

    }

      

    
}

//fucntion for button to resize 
let resize = () => {
    // adding button 
    const button = document.querySelector("button");

    //event listener to button that when clicked
    button.addEventListener("click", () =>{
        //prompt that only take a number
        size = Number(prompt("please enter a number 1-100"));

        // checks if size is in 1-100  else alert that a invaild input
        if(size > 1 && size < 100){
            //pass size to funciton 
            createDiv(size);
         } else{
            alert("Invaild input");

         }

         //checks for not a number and null
         if(isNaN(size) || size === null){
            alert("Invaild input");
            
         }
        
        
    })
}


// starts on a 16*16 grid
createDiv(16);

// starts the button
resize();

    

