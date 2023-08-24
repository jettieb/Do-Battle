let todoNum = 1;    //몇번째 todo인지 class명 저장용

function todoClick(){
    let todo;
    let battleBottom = document.getElementById("battle-bottom");
    let newDiv = document.createElement("div");
    let newText = document.createElement("input");
    newText.type = "text";
    newText.className = "input-text";
    newText.placeholder = "입력";8
    battleBottom.appendChild(newDiv);
    newDiv.appendChild(newText);

    newText.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            newDiv.style.display = "none";
            todo = newText.value;

            let newDiv2 = document.createElement("form");    //밖에 감싸줄 form 태그
            newDiv2.setAttribute("action", "/battle");   
            newDiv2.setAttribute("method", "post");      

            let todoList = document.createElement("div");   //todo 저장
            todoList.className = "todo-list";
            todoList.id = String(todoNum);   //border 색 변화 위해
            todoList.innerText = todo;

            let firecheck = document.createElement("input");    //불 input 체크박스
            firecheck.type = "checkbox";
            firecheck.id = "fire-checkbox";
            let labelForFirecheck = document.createElement("label");    //????라벨값 주기
            labelForFirecheck.setAttribute("for", "fire-checkbox");
            //let fireImg = document.createElement("img");    //불 이미지
            //fireImg.src = "../image/todo-fire.svg";
            //fireImg.value = "notDone";
            //fireImg.id = String(todoNum);
            //fireImg.onclick = function() { fireOrange(this); };
            battleBottom.appendChild(newDiv2);
            newDiv2.appendChild(todoList);
            newDiv2.appendChild(firecheck);
            newDiv2.appendChild(labelForFirecheck);
            //firecheck.appendChild(fireImg);

            todoNum ++;
        }
    });
}


function fireOrange(self){
    let num = self.id;
    let borderElements = document.getElementById(num);
    if(self.value === 'notDone') { //이게 불 주황색.
        self.src = "../image/cal-fire-orange.svg";
        self.value = 'done';
        borderElements.style.borderBottom = "2px solid #FF5C00";
        sendDataToBackend(num, true);
    }
    else{  
        self.src = "../image/todo-fire.svg";
        self.value = 'notDone';
        borderElements.style.borderBottom = "2px solid white";
        sendDataToBackend(num, false);
    }
}

function sendDataToBackend(num, status) {
    // AJAX 요청 생성
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/updateStatus", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // 요청 본문 작성
    let data = {
        num: num,
        status: status
    };

    // 요청 보내기
    xhr.send(JSON.stringify(data));
}