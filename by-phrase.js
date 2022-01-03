let img = document.getElementById("meme-img");
let sub_btn = document.getElementById("sub_button");
let title = document.getElementById("meme-title");
let meme_title = document.getElementById("title");
let title_text = "";




sub_btn.addEventListener("click", ()=>{
  getRandomPic();
  setTitle();

})
title.addEventListener("input", (event)=>{
  title_text = event.target.value;
})
title.addEventListener("change", (event)=>{
  this.event.target.value = ""
})
function setTitle(){
  meme_title.innerText = title_text;
}
function getRandomPic(){

  let i = Math.round(Math.random() * 100)

  fetch('https://api.imgflip.com/get_memes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let meme = data.data.memes[i];
    console.log(meme);
    img.style.backgroundImage = `url(${meme.url})`;
    img.style.height = `${meme.height / 2.5}px`;
    img.style.width = `${meme.width / 2.5}px`;
  });
}

