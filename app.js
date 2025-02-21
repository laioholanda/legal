//Lista de números escolhidos:
let listaDeRegistroNumeros = [];

let numeroLimite = 100;

//Gerar número aleatório:
let numeroSecreto = gerarNumero();
//Contar quantos palpites foram errados:
let Tentativas = 1;


function gerarNumero(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosList = listaDeRegistroNumeros.length

    if(quantidadeDeElementosList == numeroLimite){
        listaDeRegistroNumeros = [];
    }

   if(listaDeRegistroNumeros.includes(numeroEscolhido)){
    return gerarNumero();
   }else{
    listaDeRegistroNumeros.push(numeroEscolhido)
    console.log(listaDeRegistroNumeros)
    return numeroEscolhido;
   }
}


//Conferir palpite:
function verificarPalpite(){
    let palpite = document.querySelector('input').value;
    
    if(palpite == numeroSecreto){
        let palavraTentativas = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let verbo = Tentativas > 1 ? 'foram' : 'foi';
        exibirNaTela('h1', 'Você ganhou, Parabéns!');
        exibirNaTela('p', `${verbo} ${Tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(palpite > numeroSecreto){
            exibirNaTela('p', `Tente um número menor!`);
        }else{
            exibirNaTela('p', `Tente um número maior!`);
        }
        limpar()
        Tentativas++
    }
}

//Limpar assim que errar:
function limpar(){
    document.querySelector('input').value = '';
}

function mesagemInicial(){
    exibirNaTela('h1', 'Advinhe o número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 100');
}

//Exibir na tela essas informações:
function exibirNaTela(tag, texto){
    let local = document.querySelector(tag);
    local.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Male", {rate: 1.7});
}

//Reiniciar o jogo após ganhar:
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    Tentativas = 1;
    mesagemInicial();
    limpar();
}

