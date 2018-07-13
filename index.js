/// Javascript code to find greatest number in 5 numbers
var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;

// check each number one by one in if else condition
if(num1 > num2 && num1 > num3 &&num1 > num4 && num1 > num5){
    console.log('Greatest number is :'+num1);
    alert('Greatest number is :'+num1);
}else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log('Greatest number is :'+num2);
    alert('Greatest number is :'+num2);
}else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log('Greatest number is :'+num3);
    alert('Greatest number is :'+num3);
}else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log('Greatest number is :'+num4);
    alert('Greatest number is :'+num4);
}else{
    console.log('Greatest number is :'+num5);
    alert('Greatest number is :'+num5);
}
