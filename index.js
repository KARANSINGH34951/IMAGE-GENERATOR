let section3 = document.getElementsByClassName("section-3");

let img1= document.getElementById("img1")  
let cardtext1 = document.getElementsByClassName("card-text1")
let img2= document.getElementById("img2")  
let cardtext2 = document.getElementsByClassName("card-text2")
let img3= document.getElementById("img3")  
let cardtext3 = document.getElementsByClassName("card-text3")
let img4= document.getElementById("img4")  
let cardtext4 = document.getElementsByClassName("card-text4")


let img11= document.getElementById("img11")  
let cardtext11 = document.getElementsByClassName("card-text11")
let img21= document.getElementById("img21")  
let cardtext21 = document.getElementsByClassName("card-text21")
let img31= document.getElementById("img31")  
let cardtext31 = document.getElementsByClassName("card-text31")
let img41= document.getElementById("img41")  
let cardtext41 = document.getElementsByClassName("card-text41")


let img12= document.getElementById("img12")  
let cardtext12 = document.getElementsByClassName("card-text12")
let img22= document.getElementById("img22")  
let cardtext22 = document.getElementsByClassName("card-text22")
let img32= document.getElementById("img32")  
let cardtext32 = document.getElementsByClassName("card-text32")
let img42= document.getElementById("img42")  
let cardtext42 = document.getElementsByClassName("card-text42")

let inputdata = "";
let page = 1;

let store = function(){
  return Math.floor(Math.random() * 10);
}


async function search() {
  let input1 = document.getElementsByClassName("search1")[0]// Declare and assign the input1 variable
  inputdata = input1.value;
  console.log(inputdata);
  const url = `https://api.unsplash.com/search/photos?pages=1&query=${inputdata}&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const results=data.results
  
  console.log(results[store()].urls.regular);

  img1.src = results[store()].urls.regular;
  img2.src = results[store()].urls.regular;
  img3.src = results[store()].urls.regular;
  img4.src = results[store()].urls.regular;
  img11.src = results[store()].urls.regular;
  img21.src = results[store()].urls.regular;
  img31.src = results[store()].urls.regular;
  img41.src = results[store()].urls.regular;
  img12.src = results[store()].urls.regular;
  img22.src = results[store()].urls.regular;
  img32.src = results[store()].urls.regular;
  img42.src = results[store()].urls.regular;


  if(page===1){
    input1.innerHTML=""
  }

  page++
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
  const btn = document.getElementById("btn1")

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Form submitted!");
    page = 1;
    search();
  });
});




// fetch(`https://api.unsplash.com/search/photos?pages=1&query=india flag&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
// .then((res=>{
//   return res.json()
// }))
// .then((data)=>{
//   Object.entries(data)
//   console.log(data);
//   console.log(data.results[0].urls.regular);
// })

  
function func1(img1,cardtext1,img2,cardtext2,img3,cardtext3,img4,cardtext4) {

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
  cardtext1[0].innerHTML = data.alt_description; 
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
}

func1(img1,cardtext1,img2,cardtext2,img3,cardtext3,img4,cardtext4)
func1(img11,cardtext11,img21,cardtext21,img31,cardtext31,img41,cardtext41)
func1(img12,cardtext12,img22,cardtext22,img32,cardtext32,img42,cardtext42)




