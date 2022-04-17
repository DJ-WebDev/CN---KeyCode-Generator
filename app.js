document.addEventListener("keydown", (event) => {
  
  let numDisplay = document.getElementById("numDisplay");
  let numCode = document.getElementById("codeDisplay");
  let numKey = document.getElementById("keyDisplay");
  let numWhich  = document.getElementById("whichDisplay");
  let numlocate  = document.getElementById("locateDisplay");

  let keyDown = event.key;
  let keyCode = event.code;
  let keyWhich = event.which;
  let keyLocate = event.location;

numDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown}</p>`;

numKey.innerHTML = `<p class="pressedBtn"> ${keyDown}</p>`;

numCode.innerHTML = `<p class="pressedBtn"> ${keyCode}</p>`;

numWhich.innerHTML = `<p class="pressedBtn"> ${keyWhich}</p>`;

numlocate.innerHTML = `<p class="pressedBtn"> ${keyLocate}</p>`;


});
