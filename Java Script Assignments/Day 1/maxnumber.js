var array=[1,2,3,4,5,6,7,8,9,10];
var first=0;
var second=0;
for(var i=0;i<array.length;i++){
    var current=array[i];
    if(first<current){
        second=first;
        first=current;
    }
    else if(second<current){
        second=current;
    }
}
document.write("Array:"+array,"</br>");
document.write("first greater number is:"+first,"</br>");
document.write("second greater number is:"+second,"</br>");