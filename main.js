const div = document.querySelector(".container__reloj");

const mostrarReloj = ()=> {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  if (hora < 10) hora = "0" + hora;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  div.innerHTML = `${hora} : ${minutos} : ${segundos}`
};

setInterval(mostrarReloj, 1000);
