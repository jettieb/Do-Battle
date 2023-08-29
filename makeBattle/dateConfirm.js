function dateConfirm(){
    //let today = new Date();
    let startdate = document.getElementById("startDate");
    let startedDate = new Date(startdate.getValue);

    let finishdate = document.getElementById("finishDate");
    let finishedDate = new Date(finishdate.getValue);
    //let pickedDate = new Date("2023-01-08");
    // today = new Date(today.getFullYear(), today.getMonth(),today.getDate(),0,0);
    // pickedDate = new Date(pickedDate.getFullYear(), pickedDate.getMonth(), pickedDate.getDate(),0,0);
    // console.log(today);
    // console.log(pickedDate);

    if(startedDate > finishedDate){
        alert("시작날짜가 종료 날짜보다 빠릅니다.");
    }
}