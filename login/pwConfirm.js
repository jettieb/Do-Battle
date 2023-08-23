function PWConfirm(){
    let pwcheck = document.getElementById("battle-pw").value;   //비밀번호
    console.log(pwcheck);

    let pwrecheck = document.getElementById("battle-pwre").value;   //비밀번호확인 입력
    console.log(pwrecheck);

    if(pwcheck !== pwrecheck){
        alert("비밀번호가 일치하지 않습니다.");
        return false;   //폼제출 방지
    }
    if((pwcheck === pwrecheck) && (pwcheck != null)){
        console.log("동일함");
        //window.location.href = '../main/main.html'; //이건 백이랑 연결하면 지우기
        return true;   //폼제출
    }
}
