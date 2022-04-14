const div = document.querySelector(".container__reloj");

const mostrarReloj = () => {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  hora < 10 ? hora = "0" + hora : hora;
  minutos < 10 ? minutos = "0" + minutos : minutos;
  segundos < 10 ? segundos = "0" + segundos : segundos;
  div.innerHTML = `${hora} : ${minutos} : ${segundos}`;
};

setInterval(mostrarReloj, 1000);