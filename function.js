        //함수
        function sum(a=0, b=0) {
            var result = a+b; //지역변수
            return result;
        }
        //오버로딩 가능
        function sum(a=0, b=0, c=0) {
            var result = a+b+c; //지역변수
            return result;
        }
        var result = sum(10,20, 30); //전역변수
        console.log(result);
        var result = sum(10); //전역변수 //B의값이 undefined => non 출력
        console.log(result);

        function getSum(){ //arguments 갯수만큼 처리
            var lnth = arguments.length;
            var sum =0;
            for(var i = 0 ; i<lnth; i++){
                arguments[i];
                sum+=sum+arguments[i];
            }
            return sum;
        }
        
        result = getSum(1,2,3,4,5,6,7);
        console.log(result);

        var fnc= function(n1=1, n2=2) {
            return n1 * n2;
        }
        fnc(3,5);
        console.log(typeof fnc);//fnc 타입확인
        console.log(fnc(3));

        var otherFnc = fnc;
        console.log(otherFnc(2,10));

        var students = [
            {name: "홍길동", math:80, eng:90},
            {name: "김수미", math:85, eng:85},
            {name: "김민수", math:90, eng:75}
        ];

        function makeTableList(ary){
            var str = "<table border='1'>";
            var obj = ary[0]; //{name:홍길동 , math: 80, eng:90}
            str += "<thead>";
            for(var field in obj){ //name, math, eng 출력
                str += "<th>" + field + '</th>';
            }
                str += "<tbody>"
            for(var i = 0 ; i<ary.length; i++){ //데이터 출력
                str += "<tr><td>" + ary[i].name +"</td><td>" + ary[i].math +"</td><td>" +
                    ary[i].eng +"</td></tr>"
            }
            str +="</tbody></table>"
            document.write(str);
        }
        makeTableList(students);

