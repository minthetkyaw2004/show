let file1 = document.getElementById("basicLanguage");
let file2 = document.getElementById("libraryUsage");
let file3 = document.getElementById("framework");

let navbarTrunk = document.querySelectorAll('.navbar-trunk');

for(let i=0; i < navbarTrunk.length; i++){
    navbarTrunk[i].addEventListener('click',function(){
        this.classList.toggle('navbar-trunk-selected');
    })
}

let username = document.getElementById('username');
let password = document.getElementById('password');
let userLevel = document.getElementById('userLevel');



function userCheck(){
    if(username.value===usernames[0] && password.value===passwords[0] && userLevel.value==='admin'){
        return userLevels = 1;
    }else if(usernames.includes(username.value) && passwords.includes(password.value) && userLevel.value==='member'){
        for(let userCount = 0; userCount < usernames.length; userCount++){
            if(username.value===usernames[userCount] && password.value===passwords[userCount]){
                return userLevels = 2;
            }
        }
    }else{
        return userLevels = 3;
    }
}
function changeLocation(){
    switch (userLevels) {
        case 1:
            window.location = '../userlevel/admin/index.html';
            break;
        case 2:
            window.location = '../userlevel/member/index.html';
            break;
        case 3:
            window.location = '../userlevel/viewer/index.html';
            break;
    }
}


document.getElementById('submit').addEventListener("click",function (event){
    userCheck();
    changeLocation();
    event.preventDefault();
});

