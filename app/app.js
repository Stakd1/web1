require('../css/app.css');

let img = require('../images/yun.png');
console.log(img);


window.onload = function () {
    let person = ['小明', '小红', '小黑'];

    let ul = this.document.createElement('ul');

    person.map((v) => {
        let li = document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);
    })

    document.body.appendChild(ul);


    let imgage = new Image();
    imgage.src = img;
    document.getElementById('icon').appendChild(imgage);
}