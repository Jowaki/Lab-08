 function colorChange()
      {
        let redcolor = document.getElementById("redInputText").value;
        let greencolor = document.getElementById("greenInputText").value; 
        let bluecolor = document.getElementById("blueInputText").value;
        let widthi = document.getElementById("widthInputText").value;

        let redcolorbg = document.getElementById("redInputTextbg").value;
        let greencolorbg = document.getElementById("greenInputTextbg").value; 
        let bluecolorbg = document.getElementById("blueInputTextbg").value;
        
        text.style.borderColor='rgb('+redcolor+','+bluecolor+','+greencolor+')';
        text.style.backgroundColor='rgb('+redcolorbg+','+bluecolorbg+','+greencolorbg+')';

        text.style.borderWidth = widthi+'px';
      
      }