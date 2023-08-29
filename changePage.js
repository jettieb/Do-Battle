function changePage(url){
    window.location.href = url;
}

function changeMenu(url, num){
    console.log("눌림");
    // let Else = document.querySelectorAll('#menu-bar > div > a');
    // console.log(Else.length);
    // for (let i=0; i<Else.length; i++) {
    //     Else[i].style.color = 'red';
    // }
    // let test = document.getElementById("test");
    // test.style.color = 'red';
    document.addEventListener("DOMContentLoaded", function() {
        console.log("실행");
        let test = document.getElementById("test");
        test.style.color = 'red';
    });
    window.location.href = url; //스타일 바뀐 뒤에 페이지 불러와야함
    // let changeA = document.querySelector(`#menu-bar > div > a:nth-child(${num})`);
    // changeA.style.fontWeight = 'bold';
    
    console.log("실행");
}