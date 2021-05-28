const natural3 = a => {
    let result = 0;
    let i;
    for (i = a; i>=3; i=i/3 ){
        result = i;
        if (result === 1) {
            return true;
        } else if (result <3) {
            return false;
        } else if (result === 3) {
            return true;
        } else {
            a = result;
        };
    }; return false;
};
console.log(natural3(80));