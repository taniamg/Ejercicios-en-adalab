"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const js__userAvatar = document.querySelector(".js__userAvatar");
js__userAvatar.innerHTML = userAvatar;
js__userAvatar.src = "http://www.fillmurray.com/300/300";

userAvatar = " ";

js__userAvatar.src = `${DEFAULT_AVATAR || userAvatar} `;
