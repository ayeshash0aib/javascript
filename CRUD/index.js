function getvalue(){
    let a=document.getElementById("search").value ;
    // let a=document.getElementById("search").value="" ;
    console.log(a)
    // a.remove()


  const getul=  document.querySelector("ul");
  getul.innerHTML += `<li>${a}
  <button onclick="updateitem()">update</button>
   <button onclick="deleteitem(this)">delete</button></li>`
   let b=document.getElementById("search").value="" ;

}
function deleteitem(getobject){
    console.log(getobject)
getobject.parentElement.remove()
}