window.addEventListener('DOMContentLoaded', function(e) {
  console.log("DOM is loaded and ready!");
})

//Give them longer names! like upperTextInputField for less confusion in the future
const upperText = document.querySelector("#upper");
const lowerText = document.querySelector("#lower");
const theForm = document.querySelector(".create");
const image = document.querySelector(".url");
const mainContainer = document.querySelector(".container");
const formSubmit = document.querySelector(".container-remove");


function submitForm(event) {
  event.preventDefault();
  //selecting elements
  const img = document.createElement("div");
  const textUpper = document.createElement("div");
  const textLower = document.createElement("div");
  //adding classes
  img.classList.add("images");
  img.style.backgroundImage =`url('${image.value}')`;
  textUpper.classList.add("upper");
  textLower.classList.add("lower");
  //Give the created meme divs the values from user input
  textUpper.innerText = upperText.value;
  textLower.innerText = lowerText.value;
  img.appendChild(textUpper);
  img.appendChild(textLower);
  const extraDiv = appendImage();
  extraDiv.prepend(img);
  mainContainer.appendChild(extraDiv);

  image.value = "";
  upperText.value = "";
  lowerText.value = "";
}

function deleteMeme(event) {
  event.preventDefault();
  const target = event.target;
  target.parentElement.parentElement.remove();
}

function appendImage() {
  //select the needed elements to attach the user image
  const divOne = document.createElement("div");
  const divOneButton = document.createElement("btn");
  const buttonContainer = document.createElement("div");

  //add new classes
  divOne.classList.add("hold-images");
  divOneButton.classList.add("button-remove");
  buttonContainer.classList.add("container-remove")

  divOneButton.innerText = "Delete Meme";
  buttonContainer.appendChild(divOneButton);
  divOne.appendChild(buttonContainer);
  return divOne;
}

//event listeners
theForm.addEventListener("submit", submitForm);
mainContainer.addEventListener("click", deleteMeme);