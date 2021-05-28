let leftHalf = 0;
let rightHalf = 0;
const isHappyTicket = ticketNumber => {
    let numberLength = ticketNumber.length;
    if (numberLength%2===0) {
        half = numberLength/2;
        half2=half;
        while (half > 0) {
            half=half-1;
            leftHalf = leftHalf +Number(ticketNumber[half]);
        }
        while (half2 < numberLength) {
            rightHalf = rightHalf +Number(ticketNumber[half2]);
            half2=half2+1;
        }
        if ( leftHalf === rightHalf ){
            return true;
        } else {
            return false;
        }
    } else {
        return "Введите четное количество цифр";
    }
    
};
console.log(isHappyTicket('565656565656'));