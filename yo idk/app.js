
const box = document.querySelector(".box")
console/log(box.parentElement);
box.style.backgroundColor = "red";
const header = document.getElementById("color");
header.textContent = "Hello";

function rgb(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.backgroughColor = `rbg(${r}, ${g}, ${b})`;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    x++;
    header.textContent = "`Clicked ${x}`";
    rgb()
});
function inject(){
    const container = document.querySelector("container");
    container.insertAdjacentHTML("beforeend", `<div class="card">
    <h2 class="card-header"></h2>
    <img src="" alt="">
</div>`)
inject("guh");
}

// make 1 html card
// select the container
//forEach on items to inject to screen
//select add cart buttons