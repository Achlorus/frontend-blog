    function phonePort(){
            //  const window = document.getElementById("menu")
        if(window.innerWidth < 768){ 
                document.getElementById("menu").style.display = ("none")
                document.getElementById("buttons-div").style.display = ("block") 
           }
           if(window.innerWidth > 768){ 
                document.getElementById("menu").style.display = ("block")
                document.getElementById("buttons-div").style.display = ("none") 
           }
          
        }
    phonePort();
    function handleMenu(){
        const menu = document.getElementById("menu");
        if(menu.style.display == "none"){
            menu.style.display = "block"
        }
        else {
            menu.style.display = "none"
        }
    }
        

        
