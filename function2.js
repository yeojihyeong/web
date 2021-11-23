//구구단.
function multi(a=0){
    var str = "<table><tbody>";
    for(var i=1 ; i<=9 ; i++){
        str+='<tr><td>'+a+ '</td><td>'+ '*' +'</td><td>'+[i]+'</td><td>' +'=' +'</td><td>' + a*[i]+'</td></tr>'
    }
    str+='</tbody></table>'
    document.write(str);
}
function mul(num=2){
    var str = '<table><tbody>';
        for(var i = 1 ; i<= 9 ; i++){
            str += makeTr(num,i);
        }
        str += "</tbody></table>";
        document.write(str);
}
function makeTr(num1 = 2, num2 = 1){
    var tr = '<tr>';
        tr +="<td>"+num1+'</td><td>' + "*" + '</td><td>' + num2 + '</td><td>' + '=' + '</td><td>' + num1*num2 + '</td>'
        tr +='</tr>'
        return tr;
}
// multi(3);
mul(4);

for(var i =2 ; i<= 0 ; i++){
    mul(i);
}

multi(3);