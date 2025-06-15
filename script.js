// COMENTÁRIOS
const form = document.getElementById('form-comentario');
const lista = document.getElementById('listaComentarios');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = document.getElementById('comentarioInput').value;
  const li = document.createElement('li');
  li.textContent = texto;

  const botao = document.createElement('button');
  botao.textContent = 'x';
  botao.className = 'deletar';
  botao.onclick = () => li.remove();

  li.appendChild(botao);
  lista.appendChild(li);
  form.reset();
});

// CARROSSEL
let fotos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg"];
let indice = 0;

function mudarFoto(direcao) {
  indice = (indice + direcao + fotos.length) % fotos.length;
  document.getElementById('imagemCarrossel').src = fotos[indice];
}

// CONTAGEM REGRESSIVA
const dataAlvo = new Date("2025-10-01T00:00:00").getTime(); // data do Agrinho
const contador = document.getElementById("contador");

setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataAlvo - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);
