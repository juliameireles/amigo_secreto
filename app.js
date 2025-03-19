// Obter elementos da página
const nomeInput = document.getElementById('nomeInput');
const addButton = document.getElementById('addButton');
const listaNomes = document.getElementById('listaNomes');
const sortearButton = document.getElementById('sortearButton');
const resultado = document.getElementById('resultado');

let nomes = [];

// Função para adicionar nome à lista
function adicionarNome() {
    const nome = nomeInput.value.trim();
    
    // Validar se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adicionar o nome à lista
    nomes.push(nome);
    
    // Atualizar a lista na página
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
    
    // Limpar o campo de entrada
    nomeInput.value = '';
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome para sortear!');
        return;
    }

    // Sortear aleatoriamente um nome da lista
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];

    // Exibir o resultado
    resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
}

// Adicionar evento ao botão "Adicionar"
addButton.addEventListener('click', adicionarNome);

// Adicionar evento ao botão "Sortear Amigo"
sortearButton.addEventListener('click', sortearAmigo);
