const sidebar = document.querySelector(".sidebar");
const openbtn = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");
const linerbox = document.querySelector(".linerbox");
linerbox.addEventListener("click" , linerhide);
openbtn.addEventListener("click" , show);
function show(){
    sidebar.classList.toggle("active");
    openbtn.classList.toggle("active");
}
closebtn.addEventListener("click" , hide);
function hide(){
    sidebar.classList.toggle("active");
    linerbox.classList.toggle("active");
}
openbtn.addEventListener("click" , linershow);
function linershow(){
    linerbox.classList.toggle("active");
}
function linerhide(){
    sidebar.classList.toggle("active");
    linerbox.classList.toggle("active");
}