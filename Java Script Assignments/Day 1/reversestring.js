function reversestring(str){
    let newstring="";
    for(let i=str.length-1;i>=0;i--){
        newstring+=str[i];
    }
    return newstring;
}
let string=prompt("Enter string:");
let result=reversestring(string);
document.write("reverse string is:"+result);