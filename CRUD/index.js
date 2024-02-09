function getvalue(){
    let a=document.getElementById("search").value ;
    console.log(a)
    // a.remove()


  const getul=  document.querySelector("ul");
  getul.innerHTML += `
  <div>
  <li>${a}</li>
  <button onclick="updateitem(this)">update</button>
   <button onclick="deleteitem(this)">delete</button>
   </div>
   `
//    to remove content from search bar
   document.getElementById("search").value="" ;

}
function deleteitem(getobject){
    // console.log(getobject)
getobject.parentElement.remove()
}
function updateitem(getobject){
getobject.parentElement.children[0].setAttribute("contentEditable",true)
}