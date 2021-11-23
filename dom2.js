function getIdFunc(){
    var userId = document.getElementById('user_id');
    console.log(userId.value);
}

var students = [{
        name: "홍길동",
        math: 80,
        eng: 90,
        garde: '1학년 1반',
        avg: 85
    },
    {
        name: "김수미",
        math: 85,
        eng: 85,
        garde: '1학년 2반',
        avg: 85
    },
    {
        name: "김민수",
        math: 90,
        eng: 75,
        garde: '1학년 3반',
        avg: 82.5
    }
];

function drawTable() {
    var table = document.createElement('table');
    table.setAttribute('border', '1'); //속성지정

    var thead = document.createElement('thead');
    //타이틀 부분 생성

    var tr = document.createElement('tr');
    for (var val in students[0]) {
        var td = document.createElement('th');
        td.textContent = val;
        tr.appendChild(td);
    }

    table.appendChild(tr);
    table.appendChild(thead);
    //데이터 부분 생성
    var tbody = document.createElement('tbody');
    for (var student of students) { //배열
        var tr = document.createElement('tr');
        for (var field in student) { //배열안 값 호출
            var td = document.createElement('td');
            td.textContent = student[field];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    //화면 출력
    var bd = document.getElementsByTagName('div');
    bd[0].appendChild(table);


    var trtag = [
        document.createElement('tr'),
        document.createElement('tr'),
        document.createElement('tr')
    ]

    var tdtag = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td')
    ]
}


var table = document.createElement('table');
table.setAttribute('border', '1');

var thead = document.createElement('thead');
//타이틀 부분 생성

var tr = document.createElement('tr');
for (var val in students[0]) {
    var td = document.createElement('th');
    td.textContent = val;
    tr.appendChild(td);
}

table.appendChild(tr);
table.appendChild(thead);
//데이터 부분 생성
var tbody = document.createElement('tbody');
for (var student of students) { //배열
    var tr = document.createElement('tr');
    for (var field in student) { //배열안 값 호출
        var td = document.createElement('td');
        td.textContent = student[field];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);

//화면 출력
// var bd = document.getElementsByTagName('div');
var db = document.getElementById('show')
//bd[0].appendChild(table);
db.appendChild(table);


var trtag = [
    document.createElement('tr'),
    document.createElement('tr'),
    document.createElement('tr')
]

var tdtag = [
    document.createElement('td'),
    document.createElement('td'),
    document.createElement('td')
]



/*
var div = document.createElement('div');
var table = document.createElement('table');
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td = document.createElement('td');

table.setAttribute('border','1');

tbody.appendChild(tr);
table.appendChild(tbody);
div.appendChild(table);
td.textContent = '홍길동';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '80';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '90';
tr.appendChild(td);
td = document.createElement('td');

tr = document.createElement('tr');        
tbody.appendChild(tr);

td.textContent = '김수미';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '85';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '85';
tr.appendChild(td);
td = document.createElement('td');

tr = document.createElement('tr');
tbody.appendChild(tr);

td.textContent = '김민수';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '90';
tr.appendChild(td);
td = document.createElement('td');
td.textContent = '75';
tr.appendChild(td);
td = document.createElement('td');

tr = document.createElement('tr');
tbody.appendChild(tr);

var bd = document.getElementsByTagName('body');
bd[0].appendChild(div);
*/

/*
var div = document.createElement('div');
div.setAttribute('id','main');
var ul = document.createElement('ul');
var li = document.createElement('li');
li.textContent='Apple'
ul.appendChild(li);//ul > li
div.appendChild(ul);//div>ul
var bd = document.getElementsByTagName('body');
bd[0].appendChild(div);
*/
</script>
<!-- <script src="dom.js"></script> -->