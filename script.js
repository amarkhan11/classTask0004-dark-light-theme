
            
            var body = document.getElementById("body")
            var btn = document.getElementById("btn");
            var isDark = false;
            btn.addEventListener("click",function(){
                if(isDark === false){
                    body.style.background = "black";
                    btn.style.background = "white";
                    btn.style.color= "black";
                    btn.style.padding="12px";
                    btn.style.borderRadius = "5px"
                    btn.innerText = "Day Mode"
                    isDark = true;
                }else{
                    body.style.background = "white";
                    btn.style.background = "black";
                    btn.innerText = "Night Mode"
                    btn.style.color= "white";
                    isDark = false;
                }
            })
    