let age_range = () => {

    let age = prompt("나이를 입력해주세요");

    if(age >= 20){
        console.log("20 이상 : 성인");
    }
    else if(age >= 17){
        console.log("17 이상 : 고등학생");
    }
    else if(age >= 14){
        console.log("14 이상 : 중학생");
    }
    else if(age >= 8){
        console.log("8 이상 : 초등학생");
    }
    else if(age >= 0){
        console.log("0 이상 : 유아");
    }
    else{
        console.log("0이상의 숫자를 입력해주세요");
    }
    
}

age_range();