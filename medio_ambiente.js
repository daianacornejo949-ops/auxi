function calidadAire(){
  let n = parseInt(document.getElementById("aqi").value);
  let r = document.getElementById("resAire");

  if(isNaN(n)){ r.innerHTML="Pon número bonito"; return; }

  let texto="", color="";
  if(n<=50){ texto="Bueno " }
  else if(n<=100){ texto="Moderado " }
  else if(n<=150){ texto="Sensibles afectados "}
  else{ texto="Muy peligroso "; }

  r.innerHTML=`${texto}<div style="height:20px;background:${color};"></div>`;
}

function promRuido(){
  let n = parseInt(document.getElementById("cantRuido").value);
  let valores = document.getElementById("listaRuido").value.split(",").map(Number);

  if(valores.length!==n){ 
    document.getElementById("resRuido").innerHTML="Pon bien la cantidad.";
    return;
  }

  let suma=0;
  for(let i=0;i<n;i++) suma+=valores[i];

  document.getElementById("resRuido").innerHTML="Promedio: "+(suma/n).toFixed(2)+" dB";
}

function contarCalor(){
  let temps = document.getElementById("listaTemp").value.split(",").map(Number);
  let i = 0;
  let focos = 0;

  while(i < temps.length && temps[i] !== 0){  // se detiene si es 0 o llegamos al final
    if(temps[i] > 45) focos++;
    i++;
  }

  document.getElementById("resCalor").innerHTML = "Focos calientes: " + focos;
}
function tipoResiduo(){
  let c = parseInt(document.getElementById("codRes").value);
  let r=document.getElementById("resResiduo");
  let t="";

  switch(c){
    case 1: t="Orgánico "; break;
    case 2: t="Plástico "; break;
    case 3: t="Papel "; break;
    case 4: t="Vidrio "; break;
    default: t="Número feo";
  }
  r.innerHTML=t;
}

function nivelRio(){
  let datos = document.getElementById("listaRio").value.split(",").map(Number);
  let peligro = 0;

  for(let i=0; i<datos.length; i++){
    if(datos[i] > 3) peligro++;
  }

  document.getElementById("resRio").innerHTML="Peligrosos: "+peligro;
}