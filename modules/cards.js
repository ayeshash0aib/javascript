export function card(){
  const cards=document.createElement("div")
  cards.innerHTML=`
  <div class="card" style="width: 18rem;">
    <img src="card2.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
  const getnav=document.querySelector("nav")
  getnav.after(cards)
}
