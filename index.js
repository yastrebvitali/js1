function suma(number1,number2) {
var sum;
if ( typeof number1!= 'number')
   {console.log(number1)}
if ( typeof number2 != 'number')
    {console.log(number2)}
sum=number1+number2;
return sum;
gi
}
console.log('number1=2;'+'number2=3');
console.log('--------------suma number--------------------------------');
console.log('suma_number:'+suma(true,3));


function minus(number1,number2) {
    var minus;
    if ( typeof number1!= 'number')
    {console.log(number1)}
    if ( typeof number2 != 'number')
    {console.log(number2)}
    minus=number1-number2;
    return minus;

}
console.log('--------------minus number--------------------------------');
console.log('minus number:'+minus(2,3));


function multiplication(number1,number2) {
    var multiplication_number;
    if ( typeof number1!= 'number')
    {console.log(number1)}
    if ( typeof number2 != 'number')
    {console.log(number2)}
    multiplication_number=number1*number2;
    return multiplication_number;

}
console.log('-----------multiplication_number-----------------------------------');
console.log('multiplication_number:'+multiplication(2,3));


function division(number1,number2) {
    var division_number;
    if ( typeof number1!= 'number')
    {console.log(number1)}
    if ( typeof number2 != 'number')
    {console.log(number2)}
    division_number=number1/number2;
    return division_number;

}
console.log('-----------division_number-----------------------------------');
console.log('division_number:'+division(2,3));





