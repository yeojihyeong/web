var days = ["일", "월", "화", "수", "목", "금", "토"]
var str = '';
str += "<table border = '1'>";
str += "<thead>";
for (var day of day) {
    str += "<th>"+ day + "</th>";
}
str += "</thead>";
str += '<tbody>'
str += "<tr>";
str += "<td></td>";
for (var i = 1; i <= 30; i++) {
    str += '<td>' + i + '</td>';
    if (i % 7 == 6) {
        str += '</tr><tr>'
    }
}

str += "</tr>";
srt += "</tbody>"
str += "</table>";

document.write(str);