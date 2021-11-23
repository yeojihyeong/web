//calender.js
//var year = 2021;
//var month = 9; // 0~11 : 12를 쓰면 내년 1월

// console.log(thisMonth);

//createCalendar(1604, 2); //매개값

function createCalendar(year, month) {  //매개변수
    var thisMonth = new Date(year, month - 1); // 2021년 12월 1일.
    var thisMonthDay = thisMonth.getDay(); //해당월 1일의 요일정보
    console.log(thisMonth.getDay()); //해당 날짜의 요일정보 : 0~6 일~토
   
    var today = new Date();
    //console.log(today.getDate());
    var todate = today.getDate();
    var days = ["일", "월", "화", "수", "목", "금", "토"];
    var str = "";
    str += "<table border='1'>";
    str += "<caption>" + year + "년" + month + "월" + "<caption>";
    str += "<thead>";
    for (var day of days) {
        str += "<th>" + day + "</th>";
    }
    str += "</thead>";
    str += "<tbody>"
    str += "<tr>";
    for (var i = 0; i < thisMonthDay; i++) {
        str += "<td></td>";
    }
    var lastDay = getLastDate(year,month);
    for (var i = 1; i <= lastDay; i++) {
        if (i == todate) {
            str += "<td onclick = 'clickFnc(event)' class = 'active'>" + i + "</td>";
        } else {
            str += "<td onclick = 'clickFnc(event)'>"+ i + "</td>"; 
        }
        // str += "<td>" + i + "</td>";
        if ((i + thisMonthDay) % 7 == 0) {
            str += "<tr></tr>";
        }

    }
    str += "</tr>";
    str += "</tbody>"
    str += "</table>";
    window.document.write(str);
} //end of createCalendar

function getLastDate(year, month) {
    var result = -1;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 31;
            break;
        case 2:
            result = getYunyear(year) ? 29 : 28; //삼항연산자
            break;
        default:
            result = 30;
    }
    return result;
    // end of getastdays
}

function getYunyear(year){
    // 4로 나누어 지면 윤년
    // 100으로 나누어지면 평년
    // 400으로 나누어지면 윤년
    // 윤년이면 true 
    // 평년이면 false
    if( (year % 100 == 0) &&(year % 4 ==0)  ) {
            if( year % 400 ==0){
                return true;
            }
            return false;
        }
    else if(year % 4 == 0){
        return true
    }
    else{
        return false;
    }

}

function clickFnc(e){
    console.log(this); //this -> window객체
    console.log(e.target.textContent); 
    window.alert(e.target.textContent + "를 선택했습니다.");
}

//object는 값을 가지고 있는 속성(필드)
//object는 기능을 가지고 있는 메소드(메소드)

var obj = {
    name : "홍길동",
    age : 15,
    getInfo : function(){
        return "이름은 " + this.name + ", 나이는 " + this.age + "입니다.";
    }
}

console.log(obj.getInfo())