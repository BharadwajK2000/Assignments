array=[2,3,4,5,6,7,8,9,10,11];
function sum(arr){
    result=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            result=result+arr[i];
        }
    }
    if(result == 0){
        console.log("No even numbers found");
    }
    return result
}
console.log(sum(array))