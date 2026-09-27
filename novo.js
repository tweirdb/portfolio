function vermais(botao) {
    const info = document.getElementById('maisinfo');
    info.classList.toggle('escondido');
    if (info.classList.contains('escondido')) {
    botao.textContent = 'Ver mais';
  } else {
    botao.textContent = 'Ver menos';
  }
}