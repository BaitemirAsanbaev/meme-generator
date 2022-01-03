let start_btn = document.getElementById("start_btn")
let backdrop = document.getElementById("backdrop")
let modal = document.getElementById("modal")


start_btn.addEventListener("click", ()=>{
  modal.style.top = "25%";
  backdrop.style.top = "0"; 
})
backdrop.addEventListener("click", ()=>{
  goBack()
})
function goBack(){
  modal.style.top = "-100%";
  backdrop.style.top = "-100%";
}