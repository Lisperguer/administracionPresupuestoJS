//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners(){
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
//Clases

//Funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
  console.log(presupuestoUsuario)
 

  if(presupuestoUsuario == '' || presupuestoUsuario == null || isNan(presupuestoUsuario) || Number(presupuestoUsuario) <= 0 ){
    window.location.reload();
  }
}