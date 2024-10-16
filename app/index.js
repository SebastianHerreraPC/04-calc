const display = document.querySelector("#calculator__display");
const button = document.querySelectorAll("button");
const backspace = document.querySelector("#backspace");

const backspaceButtonState = () => {
  if (display.textContent.length > 0) {
    backspace.classList.remove("disabled");
  } else {
    backspace.classList.add("disabled");
  }
};
backspaceButtonState();

button.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id == "borrar") {
      display.textContent = "";
    } else if (item.id == "backspace") {
      let cuenta = display.textContent.toString();
      if (cuenta.length > 0) {
        display.textContent = cuenta.slice(0, cuenta.length - 1);
      }
    } else if (display.textContent != "" && itemm.id == "igual") {
      display.innerText = eval(display.innerText);
    }

    backspaceButtonState();
  });
});
