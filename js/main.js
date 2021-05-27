let resultado = document.getElementById('calculadora__resultado');
let opciones = document.querySelectorAll('td');

opciones.forEach(opcion =>{

    opcion.addEventListener('click',()=>{
    
        if(opcion.dataset.key == '='){
            resultado.textContent = eval(resultado.textContent)
        }
        else if(opcion.dataset.key == 'C'){
            resultado.textContent = '';
        }        
        else{
            resultado.textContent += opcion.dataset.key
        }
        
    });
})

