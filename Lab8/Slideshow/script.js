let slideIndex=0;
let slides=["https://www.verywellmind.com/thmb/WL4C3aKseXdfY_yslLfRnNXjLrU=/1115x836/smart/filters:no_upscale()/iStock-619961796-edit-59cabaf6845b3400111119b7.jpg", 
"https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg", "https://wallpaperaccess.com/full/30883.jpg", "https://api.time.com/wp-content/uploads/2017/01/cute-animal-tweet-off-zoo.jpg", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2011/12/cute-animal-red-panda.jpg"];

function plusSlides(n) {

 
  slideIndex += n;
  
  showSlides();
}

function showSlides()
{
  
  let vari=document.getElementById('pic1');
           
 if (slideIndex == 0)
 {
   vari.src=slides[slideIndex];
 }
 else if (slideIndex  > 4)
   {      
     slideIndex = 0;
     vari.src=slides[slideIndex];
    }    
  else if (slideIndex  < 0) 
  {
    slideIndex = 4;
    vari.src=slides[slideIndex];
  }
  else
  {
     //console.log("hi")
    vari.src=slides[slideIndex];
    
  }




  /*for (let i=0 ; i < = 4; i++) 
  {
      slides[i].style.display = "none";  
  }
  
 slides[slideIndex-1].style.display = "block";  */
}
