
let notas = [7,5,8,3,9,2,1,0,10,4,7]
let numeroaprobados = 0

for(let i = 0, i < nota.length; i++){
    if (notas[i] >= 5 && notas[i <= 10])
    numeroaprobados++
}

const aprobados = numeroaprobados
const suspensos = nota.length - numeroaprobados

const porcentajeaprobados = (aprobados * 100)/ notas.length;
const porcentajesuspensos = (suspensos * 100)/ notas.length;

console.log('El numero de aprobados es: ' + numeroaprobados + 'aprobados ('+Math.round(porcentajeaprobados))
console.log('Hay' + numerosuspensos + 'suspendidos (' + porcentajesuspensos)