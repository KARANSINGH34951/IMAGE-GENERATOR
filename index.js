let form = document.querySelector("form")
let input = document.getElementsByClassName("search")
let section3 =document.getElementsByClassName("section-3") 
let img1= document.getElementById("img1")
let img2= document.getElementById("img2")
let img3= document.getElementById("img3")
let img4= document.getElementById("img4")
let cardtext = document.getElementsByClassName("card-text")

// let ramdom =`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`

// let url=`https://api.unsplash.com/search/photos?pages=1&query=inida&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`

// fetch(`https://api.unsplash.com/search/photos?pages=1&query=india flag&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
// .then((res=>{
//   return res.json()
// }))
// .then((data)=>{
//   Object.entries(data)
//   console.log(data);
//   console.log(data.results[0].urls.regular);
// })

// function myfunction(){
//   let src1; // Declare the src variable outside of the .then block
  
//   fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
//   .then((res=>{
//     return res.json()
//   }))
//   .then((data)=>{
//     Object.entries(data)
//     console.log(data);
//     console.log(data.urls.regular);
//     src1=data.urls.regular; // Assign the value to src
//     img1[0].src = src1;
//   })
// }

document.addEventListener('DOMContentLoaded', function() {
  // Get the image element by its ID
  var imageElement = document.getElementById('img1');

  fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
          .then((res=>{
            return res.json()
          }))
          .then((data)=>{
            Object.entries(data)
            console.log(data);
            console.log(data.urls.regular);
            console.log(data.
              alt_description
              );
            
            src1=data.urls.regular; // Assign the value to src
            imageElement.src = src1; 
            cardtext[0].innerHTML = data.alt_description; 
})
});













