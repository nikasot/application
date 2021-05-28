let leftHalf;
let rightHalf;
const isHappyTicket = ticketNumber => {
    let numberLength = ticketNumber.length;
    if (numberLength%2===0) {
        half = numberLength/2;
        half2=half;
        return Number(ticketNumber[1])+Number(ticketNumber[0]);
    } else {
        return "Введите четное количество цифр";
    }
    
};
console.log(isHappyTicket('4554'));