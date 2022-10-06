let array=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        let temp=0;
        if(array[i]<=array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
document.write(array);