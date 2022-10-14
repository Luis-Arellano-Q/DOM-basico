const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const calc1 = document.querySelector('#calculo1');
const calc2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult=document.querySelector('#resultado');

form.addEventListener('mouseover',btnOnclick);
function btnOnclick(event) {
    event.preventDefault();
    const sumaInputs=calc1.value + calc2.value;

    pResult.innerHTML='Resultado: ' + sumaInputs;
}