let num1 = prompt ('Incerte un primer valor:');
let num2 = prompt ('Incerte un segundo valor:');
let num3 = prompt ('Incerte un tercer valor:');
let num4 = prompt ('Incerte un cuarto valor:');
let num5 = prompt ('Incerte un quinto valor:');
let num6 = prompt ('Incerte un sexto valor:');
let num7 = prompt ('Incerte un septimo valor:');
let num8 = prompt ('Incerte un octavo valor:');
let num9 = prompt ('Incerte un noveno valor:');
let num10 = prompt ('Incerte un decimo valor:');
let cont_par = 0;
let cont_in = 0;

if (num1%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num2%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num3%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num4%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num5%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num6%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num7%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num8%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num9%2 == 0){
    cont_par++;
} else {
    cont_in++;
}
if (num10%2 == 0){
    cont_par++;
} else {
    cont_in++;
}

console.log ('Has introducido '+cont_par,'números pares y '+cont_in,'impares.');