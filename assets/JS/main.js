'use strict';

function find_profile(){
    let login = document.getElementById("login").value;

    let link = `https://api.github.com/users/${login}`;
    console.log(link);

    fetch(link)
        .then(res => res.json())
        .then(data =>{
            const foto = data.avatar_url;
            const name = data.name;
            const login = data.login;
            const github = data.html_url;
            const blink = data.blog;
            const city = data.location;
            const mail = data.email;
            const following = data.following;
            const followers = data.followers;
        console.log(data);
        console.log(github);
        console.log(blink);


        
        document.getElementById('avatar').src = foto;
        document.getElementById('name').innerText = `Ім'я: ${name}`;
        document.getElementById('loging').innerText = `Логін: ${login}`;
        document.getElementById('githun_link').href = github;
        document.getElementById('blog').href = blink;
        document.getElementById('city').innerText = `Місто: ${city}`;
        document.getElementById('mail').innerText = `Пошта: ${mail}`;
        document.getElementById('followers_following').innerText = `Підписники: ${followers} | Підписки: ${following}`;
    });
}

window.addEventListener('load', ()=>{
    document.getElementById("login").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            find_profile();
        }
    });
    
});
