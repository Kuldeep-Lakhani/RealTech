// Calculator

function add(a, b){
    let ans = a+b;
    return ans;
} 

function sub(a, b){
    let ans = a-b;
    return ans;
}

function mul(a, b){
    let ans = a*b;
    return ans;
}

function div(a, b){
    let ans = a/b;
    ans = ans.toFixed(2);
    return ans;
}

export {add, sub, mul, div};