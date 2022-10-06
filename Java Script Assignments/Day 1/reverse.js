let rev=0;
let number=prompt("Enter a number");
let lastdigit;

while(number!=0){
    lastdigit=number%10;
    rev=rev*10+lastdigit;
    number=Math.floor(number/10);
}
document.write("reverse number:"+ rev);