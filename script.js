const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const resumen = document.querySelector('#resumen');
//const btnBorrar = document.querySelector('#btn-borrar');
const btnResumen = document.querySelector('#btn-resumen');


btnResumen.addEventListener("click", ()=>{
    let indice = categoria.selectedIndex;
    let valor = 200 * cantidad.value;
    let descuento = 0
    let total = 0

    if(valor < 0){
        valor = 0
    }

    if(indice == 0){

        descuento = (80 * valor) / 100;
        
    }else if(indice == 1){

        descuento = (50 * valor) / 100;

    }else{

        descuento = (15 * valor) / 100;
    }
    total = valor - descuento;
    resumen.innerHTML = total;
})


