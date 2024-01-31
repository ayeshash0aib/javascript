// console.log("first")
// setTimeout(() => {
//     console.log("second")

// }, 1000);
// console.log("third")



console.log("start")
fetch('https://dummyjson.com/products')
.then( function(res){
    return res.json()
})
.then( function(result){
const data =result.products
for (let index = 0; index < data.length; index++) {
   document.write(`<div class="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
   `)
    
}
})
console.log("end")


