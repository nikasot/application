const isPerfect = (number) => {
    if (number>0) {
        let devidersum=0
        for (let devider=1; devider <= number/2; devider++) {
            if (number % devider ===0 ) {
                devidersum = devidersum + devider;
            } else {
                answer = false;
            }
            }
        if (devidersum === number) {
            answer = true
        }
        return answer
    }
    
}
console.log(isPerfect(33550336));