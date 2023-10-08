
//document.getElementById("counter").innerText=33
  let countEl =document.getElementById("par")
  let countEr = document.getElementById("counter")
let count =0
function increment(){
  count=count+2
 countEr.innerText= count 
} 


function save(){
   countEl.innerText=count
  console.log(countEl)
}


  






