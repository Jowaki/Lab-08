function matchPassword() {  
    var pw1 = document.getElementById("pswd1");  
    var pw2 = document.getElementById("pswd2"); 

    console.log(pw1.value.length)
    if (pw1.value.length <8)
        {
           alert("Password is shorter that 8 charecters"); 
        }

      else if(pw1.value != pw2.value )
      {   
         alert("Passwords did not match"); 
        
      } 
      else
      {  
       
        alert("Password created successfully");  
      }  
    }  