const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", () => {
  // Escribe el código dnecesario aquí
  const addParagraph = document.createElement("p");
  let content = document.createTextNode(inputParagraph.value)
  addParagraph.appendChild(content);
  container.appendChild(addParagraph);
  //
});
  