'use strict';

const inputEl = document.querySelector ('.js_text');
const btnEl = document.querySelector ('.js_btn');
const userNameEl = document.querySelector ('.js_userName');
const userAvatarel = document.querySelector ('.js_userAvatar');
const repoNumberEl = document.querySelector ('.js_repoNumber');
const infoUserEl = document.querySelector ('.js_container');


function  handledUserInfo () {
infoUserEl.classList.remove('hidden');

const URL = "https://api.github.com/users/" + inputEl.value;

fetch (URL)
.then( response => response.json())
.then ( data => {
    userNameEl.innerHTML = data.login;
    userAvatarel.src = data.avatar_url;
    userAvatarel.alt = `${data.login}`;
    repoNumberEl.innerHTML = data.public_repos;
});

}

btnEl.addEventListener('click', handledUserInfo)