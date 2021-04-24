/* на столе 3 книги*/
/*
factorial(3)=
3*factorial(2)
3*2*factorial(1)
3*2*1*factorial(0)
3*2*1*1
6

const factorial = (n) =>{
    if (n===0) {
        return 1;
    } else{
        return n*factorial(n-1)
    }
};

const answer = factorial(3);
console.log(answer);
*/ 