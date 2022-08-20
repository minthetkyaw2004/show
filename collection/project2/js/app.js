document.querySelector('.display-grid').children[0].style.width='100%';
document.getElementById('note').style.background = 'white';

let objects = {};

if(localStorage.getItem('noteapp')===null){
    
    objects = {};

}else{

    objects = JSON.parse(localStorage.getItem('noteapp'));
    recall();

}

let lists = document.querySelectorAll('li');

for(let y = 1; y < lists.length + 1; y++){
    // console.log(lists[y]);
    
    lists[y-1].addEventListener('click',function(){
        let show = `objects.list${y}.id`;
        eval(show);

        eval(`delete objects.list${y}`);
        localStorage.setItem('noteapp',JSON.stringify(objects));
    });

}

let circles = document.querySelectorAll('.circle');
for(let circle in circles){

    circles[circle].style.background = circles[circle].getAttribute('id');

    circles[circle].addEventListener('click',function(){

        document.getElementById('note').style.background = circles[circle].getAttribute('id');

        if(circles[circle].getAttribute('id') === 'blue'){
            document.getElementById('note').style.color = 'white';
        }else{
            document.getElementById('note').style.color = 'black';
        }

    });
}

function recall(){
    for(let object in objects){

        document.getElementById('history').innerHTML += objects[object];

    }

    let lists = document.querySelectorAll('.index');

    for(let x = 0; x < lists.length; x++){
        
        lists[x].parentElement.style.background = lists[x].getAttribute('data');

    }
}

function add(){

    if(document.getElementById('note').value === ''){

        window.alert('nothing has been written yet');

    }else{

        let index = document.querySelectorAll('.index').length + 1;

        document.getElementById('history').innerHTML += `<li><span class="index" data="${document.getElementById('note').style.background}">${index}</span>${document.getElementById('note').value}</li>`;

        let task = `objects.list${index} = '<li><span class="index" data="${document.getElementById('note').style.background}">${index}</span>${document.getElementById('note').value}</li>'`;

        eval(task);

    }
    
    let lists = document.querySelectorAll('.index');
    for(let x = 0; x < lists.length; x++){

        lists[x].parentElement.style.background = lists[x].getAttribute('data');

    }

    localStorage.setItem('noteapp',JSON.stringify(objects));

}








