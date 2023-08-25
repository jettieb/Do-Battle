let todoNum = 1; //몇번째 todo인지 class명 저장용
let txtFieldNum = 0;   //줄줄이 투두 수정용

function todoClick(){
    while(txtFieldNum==0){
        let todo;
        let battleBottom = document.getElementById("battle-bottom");
        let newDiv = document.createElement("div");
        let newText = document.createElement("input");
        newText.type = "text";
        newText.className = "input-text";
        newText.placeholder = "입력";
        //위의 내용을 추가하라
        battleBottom.appendChild(newDiv);
        newDiv.appendChild(newText);
        console.log(newText); //오키
        txtFieldNum++;
        console.log(txtFieldNum);
        //div 추가 완료 , 텍스트필드 갯수 +1
        
        newText.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                battleBottom.removeChild(newDiv);
                todo = newText.value;
                // 새 텍스트 입력 후  엔터 누르면 
                let newDiv2 = document.createElement("div");    //밖에 감싸줄 div
                let todoList = document.createElement("div");   //todo 저장
                todoList.className = "todo-list";
                todoList.id = String(todoNum);   //border 색 변화 위해
                todoList.innerText = todo;
                
                let fireImg = document.createElement("img");    //불 사진
                fireImg.src = "../image/todo-fire.svg";
                fireImg.value = "notDone";
                fireImg.id = String(todoNum);
                fireImg.onclick = function() { fireOrange(this); };
                //불 아이콘 생성 
    
    
                battleBottom.appendChild(newDiv2);
                newDiv2.appendChild(todoList);
                newDiv2.appendChild(fireImg);
    
                todoNum ++;
                txtFieldNum--;
            }
        });
    }
    }
    

    //줄줄이 투두 방지하기 위한 조건문. 
    //텍스트필드가 1개 이상일 때 추가 버튼 누르면 생성 못 하게 막기 





function fireOrange(self){
    let num = self.id;
    let borderElements = document.getElementById(num);
    if(self.value === 'notDone') { //이게 불 주황색.
        self.src = "../image/cal-fire-orange.svg";
        self.value = 'done';
        borderElements.style.borderBottom = "2px solid #FF5C00";
    }
    else{  
        self.src = "../image/todo-fire.svg";
        self.value = 'notDone';
        borderElements.style.borderBottom = "2px solid white";
    }
}