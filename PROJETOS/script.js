let musicas = [
    {titulo: 'Alem do rio azul', artista:'Sarah Beatriz', src: 'musicas/musica1.mp3', img:'imagens/imagem.jpg'},
    
    {titulo: 'Tu es santo', artista:'Sarah Beatriz', src: 'musicas/musica2.mp3', img:'imagens/imagem2.jpg'},

    {titulo: 'De nada tenho falta', artista:'Sarah Beatriz', src: 'musicas/musica3.mp3', img:'imagens/imagem3.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.Fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosMin(Math.floor(musica.duration));

// eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
   renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);    
});


// function
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index.src]);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosMin(Math.floor(musica.duration));

    });

}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMin(Math.floor(musica.currentTime));
}
function segundosMin(segundos){
    let campoMinutos =  Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}

