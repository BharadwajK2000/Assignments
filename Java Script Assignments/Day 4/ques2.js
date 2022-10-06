function myFunc(){
     let arr1 = [1,2,3,4,5,6,7,8,9,10];
     let arr2 = [];

     for(let i=0; i<arr1.length; i++){
        if(arr1[i]%2 != 0){
            arr2.push(arr1[i]);
        }
     }
     console.log(arr2);
}
myFunc();