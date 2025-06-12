// Simulação de progresso
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    let progress = 21.3; // 213kg de 1000kg
    
    // Animar a barra de progresso
    let width = 0;
    const interval = setInterval(() => {
        if (width >= progress) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 20);
}

// Detector de lixo eletrônico
function analyzeImage() {
    const fileInput = document.getElementById('file-upload');
    const resultDiv = document.getElementById('detector-result');
    const resultText = document.getElementById('result-text');
    const resultInfo = document.getElementById('result-info');
    
    if (fileInput.files.length === 0) {
        alert('Por favor, selecione uma imagem primeiro.');
        return;
    }
    
    // Simulação de análise (em um MVP real, isso seria feito com uma API de IA)
    const items = [
        { name: 'Celular', category: 'e-lixo', info: 'Este é um dispositivo eletrônico que contém metais pesados e deve ser descartado em pontos de coleta específicos.' },
        { name: 'Carregador', category: 'e-lixo', info: 'Apesar de não conter baterias, este item possui componentes eletrônicos que podem ser reciclados.' },
        { name: 'Bateria de Notebook', category: 'e-lixo', info: 'Item perigoso! Contém produtos químicos tóxicos. Nunca descarte no lixo comum.' },
        { name: 'Garrafa Plástica', category: 'não e-lixo', info: 'Este item não é lixo eletrônico. Descarte na coleta seletiva de plásticos.' }
    ];
    
    // Seleciona um resultado aleatório para simulação
    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    resultText.textContent = `Identificamos: ${randomItem.name} (${randomItem.category === 'e-lixo' ? 'É lixo eletrônico' : 'Não é lixo eletrônico'})`;
    
    if (randomItem.category === 'e-lixo') {
        resultDiv.style.background = '#e3f7eb';
        resultInfo.innerHTML = `
            <p>${randomItem.info}</p>
            <p><strong>Como descartar:</strong> Leve a um dos <a href="#pontos-descarte">nossos pontos de coleta</a>.</p>
        `;
    } else {
        resultDiv.style.background = '#fff3f3';
        resultInfo.innerHTML = `
            <p>${randomItem.info}</p>
            <p>Este item pode ser descartado no lixo reciclável comum.</p>
        `;
    }
    
    resultDiv.style.display = 'block';
}

// Jogo com QR Code
function simulateQRScan() {
    const feedbackDiv = document.getElementById('game-feedback');
    feedbackDiv.style.display = 'block';
    
    // Animação simples
    feedbackDiv.style.opacity = '0';
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        feedbackDiv.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
}

// Galeria de recicladores
function showJoinForm() {
    const joinForm = document.getElementById('join-form');
    if (joinForm.style.display === 'none') {
        joinForm.style.display = 'block';
    } else {
        joinForm.style.display = 'none';
    }
}

// História do item descartado
function showItemStory() {
    const itemSelect = document.getElementById('item-select');
    const storyResult = document.getElementById('story-result');
    const storyTitle = document.getElementById('story-title');
    const storyContent = document.getElementById('story-content');
    const storyImpact = document.getElementById('story-impact');
    
    if (itemSelect.value === '') {
        alert('Por favor, selecione um item.');
        return;
    }
    
    const stories = {
        celular: {
            title: 'A Jornada de um Celular',
            content: 'Seu celular será desmontado por especialistas. Componentes como tela, bateria e placas serão separados para reciclagem específica.',
            impact: '1 celular reciclado evita a contaminação de 100.000 litros de água e recupera metais valiosos como ouro e prata.'
        },
        notebook: {
            title: 'O Fim Útil de um Notebook',
            content: 'Notebooks são complexos e requerem desmontagem cuidadosa. Suas partes serão classificadas: plásticos, metais, componentes eletrônicos.',
            impact: 'A reciclagem de 1 notebook economiza energia equivalente a 3 meses de uso de uma lâmpada LED.'
        },
        bateria: {
            title: 'Bateria: Perigo Controlado',
            content: 'Baterias são tratadas em ambientes controlados. Seus componentes tóxicos são neutralizados e metais são recuperados.',
            impact: '1 bateria de íon-lítio contamina 50.000 litros de água se descartada incorretamente.'
        },
        carregador: {
            title: 'Carregador: Mais Vida Útil',
            content: 'Carregadores são testados. Os funcionais são doados, os quebrados têm seus cabos e componentes separados para reciclagem.',
            impact: 'O cobre recuperado de 100 carregadores pode fazer novos 50 metros de fios elétricos.'
        }
    };
    
    const selectedStory = stories[itemSelect.value];
    
    storyTitle.textContent = selectedStory.title;
    storyContent.textContent = selectedStory.content;
    storyImpact.textContent = selectedStory.impact;
    storyResult.style.display = 'block';
}

// Chatbot
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
    } else {
        chatWindow.style.display = 'none';
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (userInput.value.trim() === '') return;
    
    // Adiciona mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatBody.appendChild(userMessage);
    
    // Simula resposta do bot
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        
        const userText = userInput.value.toLowerCase();
        
        if (userText.includes('celular') || userText.includes('telefone')) {
            botMessage.innerHTML = 'Para descartar celulares:<br>1. Remova o chip SIM<br>2. Apague todos os dados<br>3. Leve a um <a href="#pontos-descarte">ponto de coleta</a><br>Posso ajudar em algo mais?';
        } else if (userText.includes('bateria')) {
            botMessage.innerHTML = 'Baterias são itens perigosos!<br>Armazene em local seco e leve a um <a href="#pontos-descarte">ponto de coleta especializado</a>. Nunca descarte no lixo comum.';
        } else if (userText.includes('notebook') || userText.includes('laptop')) {
            botMessage.innerHTML = 'Notebooks contêm muitos componentes recicláveis:<br>1. Faça backup dos dados<br>2. Remova baterias se possível<br>3. Leve a um <a href="#pontos-descarte">centro de reciclagem</a>';
        } else if (userText.includes('carregador')) {
            botMessage.textContent = 'Carregadores podem ser reciclados! Mesmo quebrados, leve a um ponto de coleta de e-lixo. Cabos contêm cobre valioso.';
        } else {
            botMessage.innerHTML = 'Posso te ajudar com informações sobre descarte de:<br>- Celulares<br>- Baterias<br>- Notebooks<br>- Carregadores<br>Qual item você quer descartar?';
        }
        
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
    
    userInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

// Inicialização
window.onload = function() {
    updateProgress();
    
    // Adiciona evento de tecla para o chat
    document.getElementById('user-input').addEventListener('keypress', handleKeyPress);
};
