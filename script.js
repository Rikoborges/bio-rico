let temaClaro = localStorage.getItem("temaClaro") === "true";
let idiomaPT = true;

function aplicarTema() {
  document.body.style.setProperty('--bg-color', temaClaro ? '#f0f0f0' : '#1e1e1e');
  document.body.style.setProperty('--text-color', temaClaro ? '#1e1e1e' : 'white');
  document.getElementById("botaoTema").innerText = temaClaro ? "☀️ Modo Escuro" : "🌙 Modo Claro";
}

function alternarTema() {
  temaClaro = !temaClaro;
  localStorage.setItem("temaClaro", temaClaro);
  aplicarTema();
}

function copiarEmail() {
  navigator.clipboard.writeText("ricoborges.dev@gmail.com");
  alert("E-mail copiado para a área de transferência!");
}

function alternarIdioma() {
  idiomaPT = !idiomaPT;
  document.getElementById("nome").innerText = "Rico Borges";
  document.getElementById("bio").innerText = idiomaPT
    ? "Desenvolvedor Web em formação • Criativo • Autodidata"
    : "Web Developer in training • Creative • Self-taught";
  document.getElementById("footer").innerText = idiomaPT
    ? "Site criado por mim com HTML, CSS e JS 👨‍💻"
    : "Site built by me with HTML, CSS and JS 👨‍💻";
}

window.onload = aplicarTema;
