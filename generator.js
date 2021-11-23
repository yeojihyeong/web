var students = []; //{sno: 'S0001', sname: "홍길동", sphone: '010-1111', sbirth:'1999-01-01'}
        //생성자 함수.
        function Student(sno, sname, sphone, sbirth, score) {
            this.sno = sno;
            this.sname = sname;
            this.sphone = sphone;
            this.sbirth = sbirth;
            this.score = score;
        }

        students[0] = new Student('S0001', '홍길동', '010-1111', '1999-01-01', 65);
        students.push(new Student('S0002', '박문규', '010-2222', '1997-04-05', 73));
        students.push(new Student('S0003', '김민수', '010-3333', '1993-01-12', 88));
        students.push(new Student('S0004', '최민기', '010-4444', '1991-01-19', 90));
        students.push(new Student('S0005', '배철수', '010-5555', '1945-04-05', 98)); //데이터 마지막에 계속 추가
        students.unshift(new Student('S0006', '황이현', '010-0000', '1645-04-05', 59)); //데이터 제일 앞에 입력
        console.log(students);

        window.addEventListener('DOMContentLoaded', windowLoad); //이벤트 이름, 이벤트 핸들러

        function windowLoad() {

            var studentsOver70 = students.filter((item) => item.score > 70);

            document.write('</ul>');
            // 배열의 요소 갯수 만큼 반복 => for(var i = 0 ; i<ary.length;i++){}, for(var obj of ary){}
            studentsOver70.forEach(item => {
                console.log(item);
                document.write('<li>' + item.sno + ',' + item.sname + '</li>')
            }); //메소드 매개값 함수가 들어오면=>콜백함수. 반복해서 실행
            document.write('<ul>');


        }

        function forEachCallBackFnc(item, ind, ary) {
            document.write('<li>' + item.sno + ',' + item.sname + '</li>');
        };