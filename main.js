let myInput = document.getElementById("username");
let getRepo = document.querySelector(".get-repos span");
let showData = document.querySelector(".all-repos");

window.onload = function() {
    myInput.focus();
};

getRepo.onclick = function() {
    fetch(`https://api.github.com/users/${myInput.value}/repos`)
        .then((response) => response.json())
        .then((rep) => {
            let repo = "";
            for (let i = 0; i < rep.length; i++) {
                console.log(rep[i]);
                repo += `
                <div class="repo">
                <h3>${rep[i].name}</h3>
                <div class="links">
                    <span class="watchers">${rep[i].watchers_count}</span>
                    <a class="visit" href=${rep[i].html_url} target="_blank">visit</a>
                </div>
                </div>
                `;
            }
            showData.innerHTML = repo;
        })
        .catch((showData.innerHTML = `<h4 class="error">Username not Found</h4>`));
};