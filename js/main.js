let resultado = document.getElementById('resultado');
let opciones = document.querySelectorAll('td');

opciones.forEach(e =>{

    e.addEventListener('click',()=>{
        if(e.innerHTML == '='){
            resultado.innerHTML = eval(resultado.innerHTML)
        }else{
            resultado.innerHTML += e.innerHTML
        }
        
    })
})