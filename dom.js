//document 1)createElement(tag) => tag 생성
//         2) getElementsBtTagName(tag) => element 선택.

function createList(){
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.textContent = 'banana';
    ul.appendChild(li);
    li = document.createElement('li');
    
    li.textContent = 'cherry';
    ul.appendChild(li); //ul > li 하위요소로 등록
    
    var bd = document.getElementsByTagName('body'); //body를 찾겠습니다
    console.log(bd[0].appendChild(ul));
}

/*
var tbl = window.document.createElement('table'); // 엘리먼트 생성, tag
tbl.setAttribute('border','1');
tbl.setAttribute('id','tbl');
console.log(tbl);


var ul = document.createElement('ul');
var li = document.createElement('li');
li.textContent = 'banana';
ul.appendChild(li); //ul > li 하위요소로 등록

*/

//<body><ul><li>banana</li></ul></body>
