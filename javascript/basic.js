var v1;
window.console.log(typeof v1); //undefined
v1 = 10; //number type
window.console.log(typeof v1);
v1 = 'hello'; //String type  동적으로 변경
window.console.log(typeof v1);
v1=true;
window.console.log(typeof v1);
v1=null;
window.console.log(typeof v1);
var result = 10+20;
result = '10'+ "20";
window.console.log(result);
result = '20' /'10';
window.console.log(result);
var result = 30 * '2'
window.console.log(result);

var Result = 60;
if(result == Result){
    console.log('같습니다.')
} else{
    console.log('다릅니다.')
}
var strTag = '<h1>hello</h1>';
strTag +='<ul><li>Apple</li>';
strTag +='<li>Banana</li>';
strTag += '</ul>';
window.document.write(strTag);
strTag = "result 변수에 들어있는 값 " + result + "<br>";
window.document.write(strTag);
// strTag = `result 변수에 들어있는 값 ${result}`;
window.document.write(strTag);
window.document.write('<h1>hello world</h1>');

result = 6/4;
window.document.write(result);


if(result > 1){
    document.write('1보다 큽니다.');
}else{
    document.write('1보다 작습니다.')
}


var cnt = 10;
for(var i = 1 ; i<=10; i ++){
    document.write(i+'<br>');
}
document.write('<ul>');

while(cnt>0){
    document.write('<li>i의 값: '+cnt + '</li>');
    cnt--
}
document.write('</ul>');

var obj = {};
obj.id = 'user1';
obj.name = 'Hong';
obj['phone'] = '010-1111-2222';

obj = {
    id: 'user2',
    name: "hong1",
    phone: "010-1234-5678"
}
var field = 'phone'
console.log(typeof obj);

document.write('id: ' +obj.id + '<br>');
document.write('name: ' + obj.name+'<br>');
document.write('phone: ' + obj[field]+'<br>');

var ary = [];
ary[0] = 'hong';
ary[1] = 'hwang';
ary[2] = 'park';
ary[3] = 100;
ary[4] = {
    name : 'Amy',
    age : 15
}
delete ary[1];
for(var i = 0; i<ary.length; i ++){
    if(ary[i] != undefined){
        console.log(ary[i]);
    }
}
console.log(ary[0]);

//console.log(Math.sign(0));

var a = b = 10;
a = 20;

console.log(a,b);

var obj1 = {
    name : 'Hwang'
}

var obj2 = obj1;
obj2 = {
    name : 'Kim'
}
console.log(obj1)