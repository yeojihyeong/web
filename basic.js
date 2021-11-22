<script>
    var kim = {
        name: 'Kim',
        age: 25,
        phone: '010-1111'
    }

    var lee = {
        name: 'Lee',
        age: 28,
        phone: '010-2222'
    }

    var park = {
        name: 'Park',
        age: 33,
        phone: '010-3333'

    }
    park.address = '대구 100번지';
    park['birth'] = 1995-05-05;
    for (var field in park) { //park이가진 field를 하나씩 실행하겠다
        console.log(field, park[field]);
    }

    var objAry = [kim, lee, park];
    for (var obj of objAry) { //향상된 for문 과 비슷  for(String str : strList){}
        console.log(obj);
    }

    for (var obj of objAry) {
        console.log(obj.name);
    }

    console.clear(); ////////위의 내용 지움////////////////////////////////////

    //////////////////////////////////이것만 이해하면 다한거임/////////////////////////
    document.write('<ul>');
    for (var obj of objAry) {
        for (var field in obj) {
            console.log(`${field},${obj[field]}`);
            document.write(`<li>${field},${obj[field]}</li>`);
        }
        console.log('---------------------------')
    }
    document.write('</ul>');
    ///////////////////////////////////////////////

    document.write('<table border="1">');
    for (var obj of objAry) {
        document.write('<tr>');
        for (var field in obj) {
            console.log(`${field},${obj[field]}`);
            document.write(`<td>${obj[field]}</td>`);
        }
        document.write('</tr>');
        console.log('---------------------------');
    }
    document.write('</ul>');
</script>