let sideBar = document.getElementById("sidebar");
let btn = document.getElementById("navbutton");
let btnclose = document.getElementById("navbuttonclose");
btn.addEventListener("click", function () {
  if ((sideBar.style.left = -999)) {
    sideBar.style.left = 0;
    console.log(sideBar.style.left);
  }
});
btnclose.addEventListener("click", function () {
  sideBar.style.left = -999;
});


let num = document.getElementsByClassName("num")
for(let i =0; i<num.length; i++){
  if(Number(num[0].textContent) > Number(15)){
    num[i].style.color="green"
  }else{
    num[i].style.color="red"
  }
  
}
console.log(Number(num[2].textContent))