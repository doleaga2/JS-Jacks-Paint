function configureListeners() {
    
    let images = document.getElementsByTagName('img') // select img elements  


     for(var i = 0; i < images.length; i++) {
        console.log(images[i])
        images[i].addEventListener('mouseover', (event) => { 
            // console.log("mouseover")
            // event.target.style.opacity = 0.5;
            addOpacity(event)
        });

        images[i].addEventListener('mouseout', (event) => { 
            // console.log("mouseout")
            // event.target.style.opacity = 1;
            removeOpacity(event)
        });


        // onmouseover = (event) => { };

        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
   event.target.classList.add("dim") // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     event.target.classList.remove("dim")
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
           price = "$14.99"
           colorName = "Lime Green" 
           
           // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
           price = "$11.14"
           colorName = "Medium Brown"
        // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = "$22.99"
            colorName = "Royal Blue"    
        // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = "$4.99"
            colorName = "Solid Black"   
        // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = "$8.22"
            colorName = "Solid Cyan"
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = "$11.99"
            colorName = "Solid Purple"
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = "$13.42"
            colorName = "Solid Red"
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = "$21.98"
            colorName = "Solid White"
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = "$14.99"
            colorName = "Solid Yellow"
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:  
          break;  
         
         
        }
        updatePrice(colorName, price)          

    function updatePrice(colorName, price)
    {     
        console.log (colorName, price)  
        let colorPrice = document.getElementById ("color-price") // select element with corresponding id
        // display price
        colorPrice.innerText = price

        let color = document.getElementById("color-name")
        color.innerText = colorName // select element with corresponding id
        //display color name
    }
    
}
