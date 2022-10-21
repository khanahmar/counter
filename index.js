const btn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count;

btn.addEventListener("click", (e) => {
  count = Number(countEl.innerHTML) + 1;
  countEl.innerHTML = count;
});

function save() {
  let save = `${countEl.innerHTML} -`;
  saveEl.innerText += save;
  countEl.innerText = "0";
}
