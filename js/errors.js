//1. Создайте ошибку типа type error.

// let type;
// console.log(type(1));

//2. Создайте ошибку типа reference error.

// const  ref1= 1;
// console.log(ref2(1));

//3. Создайте ошибку типа syntax error.

// const  syntax1 () = 1;
// console.log(syntax1);

//4. Создайте ошибку типа logic error.

const sumSquared  = (a, b) => {
    answer = Math.pow(2,a) + 2*a*b+ Math.pow(2,b) ;
    return answer;
}
console.log(sumSquared(5,5));
