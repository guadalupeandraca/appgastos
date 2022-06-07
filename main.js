var nombres = [];
var montos = [];
var total = 0;

function Calcular(){
    total = 0;
    apagar =0;
    for(let i=0; i < montos.length; i++){
        total += parseFloat(montos[i]);
    }
    apagar = parseFloat(total/montos.length).toFixed(2);
    var totalM = document.getElementById('total');
    totalM.innerHTML = `
    <div class="flex-item">
        <p>El total gastado fue: ${total}</p>
        <p>Cada uno debe pagar: ${apagar}</p>
        </div> 
    `;
}

function AgregarNuevo(nombre,monto){
    if(monto=="" || nombre=="" ){
        alert('Algún campo está incompleto. Debe completar nombre y monto gastado'); 
    }
    else{
        nombres.push(nombre);
        montos.push(monto); 
        Calcular();
        Imprimir();
    }
}

function BorrarUno(){
    let name= prompt("Ingrese nombre a borrar");
    let indice = nombres.indexOf(name);
    nombres.splice(indice, 1);
    montos.splice(indice, 1);
    Imprimir();
    Calcular();
}

function Imprimir(){
    let nuevo = document.getElementById("datos");
    nuevo.innerHTML ="";  
    for(let i=0; i < montos.length; i++ ){
        nuevo.innerHTML += `
        <div class="flex-item">
        <p>${nombres[i]} gastó: ${montos[i]}</p>
        </div>
    `;
    } 
}; 
