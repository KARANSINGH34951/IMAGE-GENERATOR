// let url=`https://api.unsplash.com/search/photos?pages=1&query=inida&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`

fetch(`https://api.unsplash.com/search/photos?pages=1&query=india flag&client_id=YPAfQlqnyZmZ45wsfbe5re_wKlF2LtsqA5apSKJWEYQ`)
.then((res=>{
  return res.json()
}))
.then((data)=>{
  Object.entries(data)
  console.log(data);
  console.log(data.results[0].urls.regular);
})