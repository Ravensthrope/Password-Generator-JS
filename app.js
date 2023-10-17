const inputBar = document.querySelector("#input-bar");
const length = document.querySelector("#input-range");
const lenLabel = document.querySelector("#len-lbl");
const intBox = document.querySelector("#input-int");
const charBox = document.querySelector("#input-char");
const copyButton = document.querySelector("#copy-btn");

let numberAllowed = false;
let charAllowed = false;

length.addEventListener("input", (e) => {
  const len = e.target.value;
  lenLabel.innerHTML = "Length: " + len;
  generatePassword();
});

intBox.addEventListener("change", () => {
  numberAllowed = intBox.checked;
  generatePassword();
});

charBox.addEventListener("change", () => {
  charAllowed = charBox.checked;
  generatePassword();
});

copyButton.addEventListener("click", () => {
  copyToClipboard();
});

inputBar.addEventListener("click", () => {
  copyToClipboard();
});

const generatePassword = () => {
  const len = length.value;
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let pass = "";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "~`!@#$%^&*()[]{}";

  for (let i = 0; i < len; i++) {
    const position = Math.floor(Math.random() * str.length);
    pass += str.charAt(position);
  }

  inputBar.value = pass;
};

const copyToClipboard = () => {
  inputBar.select();
  document.execCommand("copy");
  // Optionally, you can provide feedback to the user
  copyButton.innerText = "Copied!";
  setTimeout(() => {
    copyButton.innerText = "Copy";
  }, 1500);
};

// Initial password generation
generatePassword();
