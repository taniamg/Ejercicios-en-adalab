"use strict";

const elementText = document.querySelector(".js_text");

function addLorem() {
  elementText.innerHTML +=
    "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, idimpedit aspernatur deleniti minima ab, officia dolorem ipsa voluptatum,quaerat in provident. Nam placeat sapiente qui neque repudiandae, quisillum. </p>";
  return elementText;
}

elementText.addEventListener("mouseout", addLorem);
