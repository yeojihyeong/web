//array.js
var checkedAry = [];

// sno, sname, sphone, sbirth => students
var fields = {
    sno: '학번',
    sname: '이름',
    sphone: '연락처',
    sbirth: '생년월일'
};

var str =
    `    <form action='123.html' name='myname' id='myform' onsubmit='submitFnc(event)'>
        학번: <input type='text' name='sno'><br>
        이름: <input type='text' name='sname'><br> 
        연락처: <input type='text' name='sphone'><br>
        생년월일: <input type='text' name='sbirth'><br>
        <input type='submit' value='저장'>
        </form>
        <form action='123.html' name='secondName' id='secondForm'>
        <input type='text', name='id'>
        </form>
        `

document.write(str);
document.write('<div id="show"></div>');

createTableList();
//저장버튼 클릭하면 => 입력값이 화면에 추가.
function submitFnc(e) {

    e.preventDefault(); //페이지 안넘어가게 설정

    console.log(document.forms['myform'].elements)
    console.log(document.forms['myform'].elements['sno'].value)
    // console.log(document.forms['secondForm'])
    // var s_no = document.querySelector('form>input[name="sno"]').value;
    // var s_name = document.querySelector('form>input[name = "sname"]').value;
    // var s_phone = document.querySelector('form>input[name = "sphone"]').value;
    // var s_birth = document.querySelector('form>input[name = "sbirth"]').value;
    // console.log(s_no, s_name, s_phone, s_birth);

    var s_no = document.forms['myform'].elements['sno'].value
    var s_name = document.forms['myform'].elements['sname'].value
    var s_phone = document.forms['myform'].elements['sphone'].value
    var s_birth = document.forms['myform'].elements['sbirth'].value

    var std = {
        sno: s_no,
        sname: s_name,
        sphone: s_phone,
        sbirth: s_birth
    }
    document.getElementById('tby').appendChild(getTrStudent(std)); //데이터 삽입
}

function clickFnc(e) {
    // e.preventDefault();
    console.log(e)
    // console.log(this.parentNode.parentNode.remove()); //삭제기능
    // console.log(e.path[2].children[0].textContent); //event.['path'][0] 사용 가능 ※오브젝트 타입일 경우 사용 가능
    // console.log(e.path[2].remove()); //e.path[2].remove() -> 요소 지우는 기능
    var no = this.parentNode.parentNode.children[1].textContent; //복제
    var name = this.parentNode.parentNode.children[2].textContent;
    var phone = this.parentNode.parentNode.children[3].textContent;
    var brith = this.parentNode.parentNode.children[4].textContent;
    var obj = {
        sno: no,
        sname: name,
        sphone: phone,
        sbirth: brith
    }
    document.getElementById('tby').appendChild(getTrStudent(obj)); //데이터 복사
    // var selected_tr = this.parentNode.parentNode;
    // var clone_tr = selected_tr.cloneNode(true);
    // console.log(clone_tr)
    // document.getElementById('tby').appendChild(clone_tr);

}



// object를 받아서 tr생성
function getTrStudent(student) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    //체크박스
    var chkbox = document.createElement('input');
    chkbox.onchange = changeFnc;
    chkbox.setAttribute('type', 'checkbox');
    td.appendChild(chkbox);
    tr.appendChild(td);
    tr.onmouseover = mouseOverFnc
    tr.onmouseout = mouserOutFnc
    //학번 .... 생년월일
    for (var field in fields) {
        var td = document.createElement('td');
        td.textContent = student[field];
        tr.appendChild(td);
    }
    //버튼
    td = document.createElement('td');
    var btn = document.createElement('button');
    // btn.textContent = '삭제';
    btn.textContent = '복사';
    btn.onclick = clickFnc;
    td.appendChild(btn)
    tr.appendChild(td);

    return tr;

}

// for(var field in fields)
// console.log(fields);


function createTableList() {
    var table = document.createElement('table');
    table.setAttribute('border', '1');

    //타이틀 부분 생성 
    var thead = makeHead();
    table.appendChild(thead);
    //데이터 부분 생성/
    var tbody = makeBody();
    table.appendChild(tbody);
    //div 하위요소로 출력
    document.getElementById('show').appendChild(table);
}

function mouseOverFnc() {
    this.style.backgroundColor = 'yellow';
}

function mouserOutFnc() {
    this.style.backgroundColor = '';
}



function changeFnc() {
    // console.log(this.parentNode.nextSibling.textContent);
    var searchSno = this.parentNode.nextSibling.textContent;
    if (this.checked == true) {
        var lnth = checkedAry.length;
        // checkedAry[lnth] = searchSno;
        checkedAry.splice(lnth, 0, searchSno);
    } else {
        for (var i = 0; i < checkedAry.length; i++) {
            if (checkedAry[i] == searchSno) {
                // delete checkedAry[i];
                checkedAry.splice(i, 1, /*'added'*/ ); //splice는 배열이 가지고있는 메소드 added 가없으면 삭제 있으면 대체
                break;
            }
        }
    }
    console.log(checkedAry)

}

function makeBody() {
    var tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tby');
    for (var student of students) {

        tbody.appendChild(getTrStudent(student));
        /*
        var tr = document.createElement('tr');
        tr.onmouseover = mouseOverFnc
        tr.onmouseout = mouserOutFnc
        var td = document.createElement('td');
        //추가내용 체크박스
        // td.innerHTML = "<input type = 'checkbox'>"; 이렇게도 사용가능
        var chkbox = document.createElement('input');
        chkbox.onchange = changeFnc;
        chkbox.setAttribute('type','checkbox');
        td.appendChild(chkbox);

        //원래 필드
        tr.appendChild(td);
        for (var field in fields) {
            var td = document.createElement('td');
            td.textContent = student[field];
            tr.appendChild(td);
        }
        //추가내용
        td = document.createElement('td');
        var btn = document.createElement('button');
        btn.textContent = '삭제';
        btn.onclick = clickFnc;
        td.appendChild(btn)
        tr.appendChild(td);
        tbody.appendChild(tr); */
    }
    return tbody;
}

function makeHead() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    //추가내용 체크박스
    var td = document.createElement('th');
    td.textContent = "선택";
    tr.appendChild(td);

    for (var field in fields) {
        var td = document.createElement('th');
        td.textContent = fields[field];
        tr.appendChild(td);
    }
    //추가내용
    td = document.createElement('th');
    td.textContent = '버튼'
    tr.appendChild(td);
    thead.appendChild(tr);
    return thead; //<thead><tr><th>sno</th><th>sname....</th></tr></thead>
}