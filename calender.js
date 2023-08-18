window.onload = function () {buildCalendar();}

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 오늘 날 저장용

function buildCalendar(){
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);   //이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth()+1, 0);  //이번달 마지막일
    
    let Calendar_tbody = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();
    document.getElementById("calMonth").innerText = nowMonth.getMonth() + 1;

    //달 옮길 떄 이전것 남아있는것 막기
    while (Calendar_tbody.rows.length > 0) {          
        Calendar_tbody.deleteRow(Calendar_tbody.rows.length - 1);
    }

    //달력만들기 시작
    let nowRow = Calendar_tbody.insertRow();

    //1일 이전 달력
    for (let day = 0; day < firstDate.getDay(); day++) {
        let nowColumn = nowRow.insertCell();
    }

    //1일 이후 달력
    let nowDay = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate(), 0, 0); //1일부터 시작 (시간 0시 0초로 맞춤)
    while (nowDay <= lastDate) {
        if (nowDay.getDay() === 0) { // 일요일인 경우 새로운 행을 추가
            nowRow = Calendar_tbody.insertRow();
        }
        let nowColumn = nowRow.insertCell();
        
        //불svg 넣기
        let newDivFire = document.createElement("div");
        let imgElement = document.createElement("img");
        //오늘 이후는 투명도 70%
        if(today >= nowDay){
            imgElement.src = "image/cal-fire-white.svg";
        } else{
            imgElement.src = "image/cal-fire-white70.svg";
        }
        newDivFire.appendChild(imgElement);
        // newDivFire.onclick = function() {
        //     changeDate(nowDay);
        //     console.log(nowDay);
        // };   //changeDate 함수 onclick 속성으로 추가
        nowColumn.appendChild(newDivFire);

        //불 클릭시 밑에 날짜 바뀌는
        // newDivFire.addEventListener('click', function (event){
        //     document.getElementById("click-date").innerText = (nowDay.getMonth()+1) + '/' + nowDay.getDate(); 
        //     console.log(nowDay.getDate());
        // })

        //날짜 글씨 넣기
        let newDivDate = document.createElement("div");
        newDivDate.innerHTML = nowDay.getDate();        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDivDate);

        //오늘 날짜 주황색으로 표시
        if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()){
            newDivDate.className = "today";
            // document.getElementsByClassName("today").style.color = '#FF5C00';
        }

        // 다음 날짜로 이동
        nowDay.setDate(nowDay.getDate() + 1); 

        function changeDate(clickedDate) {
            let clickDate = clickedDate.getDate();
            document.getElementById("click-date").innerText = (nowMonth.getMonth() + 1) + '/' + clickDate;
            console.log(clickDate);
        }
    }
}

function prevCalendar(){
    nowMonth.setMonth(nowMonth.getMonth()-1);
    buildCalendar(); 
}

function nextCalendar(){
    nowMonth.setMonth(nowMonth.getMonth()+1);
    buildCalendar();
}

// function changeDate(){
//     let clickFire = document.querySelector("tbody");
//     for(let i=1; i<clickFire.rows.length; i++){
//         for(let j=1; j<clickFire.rows[1].cells.length; j++){
//             clickFire.rows[i].cells[j].newDivFire.onclick = function(){
//                 let clickDate = clickFire.rows[i].cells[j].newDivDate.innerText;
//                 document.getElementById("click-date").innerText = (nowMonth.getMonth()+1) + '/' + clickDate;
//                 console.log(clickDate);
//             }
//         }
//     }
//     // document.getElementById("click-date").innerText = (nowDay.getMonth()+1) + '/' + nowDay.getDate(); 
//     // console.log(nowDay.getDate());
// }