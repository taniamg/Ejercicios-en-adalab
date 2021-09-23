'use strict';
const inputEl = document.querySelector ('.js_text');
const btnEl = document.querySelector ('.js_btn');
const orgNameEl = document.querySelector ('.js_orgName');
const repoListEl = document.querySelector ('.js_repoList');
const infoContainerEl = document.querySelector ('.js_container');

function handledGetRepos () {
    infoContainerEl.classList.remove ('hidden');
    orgNameEl.innerHTML =` Estos son los repos de ${inputEl.value}:`;

    const urlElement = "https://api.github.com/orgs/" + inputEl.value;

    fetch (urlElement)
    .then(orgResponse => orgResponse.json())
      .then(orgData => {
        const org = orgData.repos_url;
        return fetch(org);
      })
      .then(reposResponse => reposResponse.json())
      .then(reposData => {

        for (let repo of reposData){
          const elementLi = document.createElement('li');
          elementLi.innerHTML = repo.name;
          repoListEl.appendChild(elementLi);
        }
      });
}

btnEl.addEventListener('click', handledGetRepos)