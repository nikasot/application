let i;
let summa;
const sum = (begin, end) => {
    if (begin > end) {
        return NaN;
    } else if (begin === end) {
        return begin;
    } else {
        let i = end; 
        i = i - 1;
        if(i === begin - 2) {
            return 0;
        } else {
            summa=end+sum(begin,i);
            return summa;
        };
    }
    
}
const answer = sum(16,15); 
console.log(answer);