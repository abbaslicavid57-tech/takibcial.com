const click=document.getElementById("click");

document.addEventListener("click",()=>{
  click.currentTime=0;
  click.play();
});

function order(qty,price){
  const msg=`Instagram ${qty} Takibçi - ${price} AZN`;
  window.open(
    "https://wa.me/994709006777?text="+encodeURIComponent(msg),
    "_blank"
  );
}
