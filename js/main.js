let i;
let summa;
const sum = (begin, end) => {
    let i = end; 
    i = i - 1;
    if (i === begin - 2) {
        return 0;
    } else {
        summa=end+sum(begin,i);
        return summa;
    };
}
const answer = sum(10,15); 
console.log(answer);