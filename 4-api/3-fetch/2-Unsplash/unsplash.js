var image = document.querySelector(".random")
console.log(image);

fetch("https://source.unsplash.com/random")
.then( (res) => {
   // console.log(res)
   return res.blob()
})
.then ((blob) => {
   // console.log(blob)
    var objectURL = URL.createObjectURL(blob)
   // console.log(objectURL)
   image.src = objectURL;
})
.catch((err) => {
    console.log(err)
})