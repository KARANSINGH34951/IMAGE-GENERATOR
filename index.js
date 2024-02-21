let form = document.querySelector("form")
let input = document.getElementsByClassName("search")
let section3 =document.getElementsByClassName("section-3") 



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
  
document.addEventListener('DOMContentLoaded', function() {

  let img1= document.getElementById("img1")  
  let cardtext = document.getElementsByClassName("card-text")
  let img2= document.getElementById("img2")  
  let cardtext2 = document.getElementsByClassName("card-text2")
  let img3= document.getElementById("img3")  
  let cardtext3 = document.getElementsByClassName("card-text3")
  let img4= document.getElementById("img4")  
  let cardtext4 = document.getElementsByClassName("card-text4")

  fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
.then((res=>{
  return res.json()
}))
.then((data)=>{
  Object.entries(data)
  console.log(data);
  console.log(data.urls.regular);
  console.log(data.alt_description)
  src1=data.urls.regular;
  img1.src = src1; 
  cardtext[0].innerHTML = data.alt_description; 
  return fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
})
.then((res=>{
  return res.json()
}))
.then((data)=>{
  Object.entries(data)
  console.log(data);
  console.log(data.urls.regular);
  console.log(data.alt_description)
  src2=data.urls.regular;
  img2.src = src2; 
  cardtext2[0].innerHTML = data.alt_description; 
  return fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
})
.then((res=>{
  return res.json()
}))
.then((data)=>{
  Object.entries(data)
  console.log(data);
  console.log(data.urls.regular);
  console.log(data.alt_description)
  src3=data.urls.regular;
  img3.src = src3; 
  cardtext3[0].innerHTML = data.alt_description; 
  return fetch(`https://api.unsplash.com/photos/random/?client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
})
.then((res=>{
  return res.json()
}))
.then((data)=>{
  Object.entries(data)
  console.log(data);
  console.log(data.urls.regular);
  console.log(data.alt_description)
  src4=data.urls.regular;
  img4.src = src4; 
  cardtext4[0].innerHTML = data.alt_description; 
  
})
})













