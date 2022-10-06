arr=[10,20,30];
function test(t1,t2,t3) {
    t1 = arr[0];
    t2 = arr[1];
    t3 = arr[2];
    if(t1>t2 && t1>t3) {
        console.log(`largest value is : ${t1}`);
    }
    else if(t2>t3)
    {
        console.log(`largest value is : ${t2}`);
    }
    else
    {
        console.log(`largest value is : ${t3}`);
    }
}
test(arr);