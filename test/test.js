
function valueTarget (x,y) {
    for (let i = 1; i < 10; i++) {
        signo = Math.pow(-1,i);
        x = x+(i*signo);
        x = Math.abs(x);
        console.log(x);
    }
    return x;
}
console.log(valueTarget(0,4));