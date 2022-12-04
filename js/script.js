const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let i = 0;

btn.addEventListener("click", (value) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

function createDeleteElements(e) {
  const li = document.createElement("li");
  li.className = "li";
  li.textContent = input.value;
  const btn = document.createElement("li");
  li.className = "li";
  li.textContent = input.value;

  result.appendChild(li)
}
