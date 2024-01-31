 export function navbar(){
     const nav=document.createElement("nav")
     nav.innerHTML=`
     <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
     </ul>
     `
     document.body.prepend(nav)
}

