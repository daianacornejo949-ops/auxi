
function brillo(){
  let m=parseFloat(document.getElementById("mag").value);
  let r=document.getElementById("resMag");

  if(m<0) r.innerHTML="✨ Extremadamente brillante";
  else if(m<2) r.innerHTML=" Muy brillante";
  else if(m<4) r.innerHTML="Brillante";
  else if(m<6) r.innerHTML=" Débil";
  else r.innerHTML=" No visible";
}

function promPlan(){
  let n=parseInt(document.getElementById("cantPlan").value);
  let datos=document.getElementById("listaPlan").value.split(",").map(Number);

  let suma=0;
  for(let i=0;i<n;i++) suma+=datos[i];

  document.getElementById("resPlan").innerHTML = "Promedio: "+(suma/n).toFixed(2)+" mill km";
}
function crateres(){
  let d = document.getElementById("listaCrat").value.split(",").map(Number);
  let i = 0, c = 0;

  while(i < d.length && d[i] !== 0){ 
    if(d[i] > 50) c++;
    i++;
  }

  document.getElementById("resCrat").innerHTML = "Grandes: " + c;
}
function cuerpo(){
  let c = parseInt(document.getElementById("codCuerpo").value);
  let r = document.getElementById("resCuerpo");

  switch(c){
    case 1: r.innerHTML = " Estrella"; break;
    case 2: r.innerHTML = " Planeta"; break;
    case 3: r.innerHTML = " Cometa"; break;
    case 4: r.innerHTML = " Asteroide"; break;
    case 5: r.innerHTML = " Galaxia"; break;
    default: r.innerHTML = "No valido";
  }
}
function spo(){
  let noches = 0;
  let respuesta;

  do {
    let valor = prompt("Ingresa nivel de luz (lux):");
    valor = Number(valor);
    if(!isNaN(valor) && valor < 5){
      noches++;
    }
    respuesta = prompt("¿Quieres ingresar otra medición? (si/no)").toLowerCase();
 } while(respuesta !== "no"); 

  document.getElementById("resSpo").innerHTML = "Noche profunda: " + noches;
}

