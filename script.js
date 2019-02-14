const quadrado = document.querySelector('.quadrado');
const imgFaustao = document.querySelector('img');

const mostrarQuadrado = function(){
    // toggle verifica se a classe existe, se sim ele adc
    quadrado.classList.toggle('visivel');
}

const destaqueImagem = function(){
    imgFaustao.classList.toggle('destaque');
}

quadrado.onmouseover = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;

imgFaustao.onmouseenter = destaqueImagem;
imgFaustao.onmouseout = destaqueImagem;