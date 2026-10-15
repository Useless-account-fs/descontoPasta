// Função chamada ao clicar no botão
function calcular() {
    // Pega o valor digitado pelo usuário
    var total = parseFloat(document.getElementById('preco').value);
    var tDesconto = 0;
    var percentual = 0;
    var faixaTexto = "";

    // Validação
    if (isNaN(total) || total <= 0) {
        alert('⚠️ Por favor, insira um valor válido!');
        return;
    }

    // === LÓGICA ORIGINAL DO SEU CÓDIGO ===
    if (total < 100) {
        tDesconto = total;
        percentual = 0;
        faixaTexto = "📦 Compra abaixo de R$ 100";
        console.log(tDesconto);
    }
    else if (total >= 100 && total < 500) {
        let desconto = total * 0.05;
        tDesconto = total - desconto;
        percentual = 5;
        faixaTexto = "🎯 Faixa R$ 100 a R$ 499,99";
        console.log(tDesconto);
    }
    else {
        let desconto = total * 0.1;
        tDesconto = total - desconto;
        percentual = 10;
        faixaTexto = "🏆 Faixa R$ 500 ou mais";
        console.log(tDesconto);
    }
    // =====================================

    // Formata valores em Real (BRL)
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    // Calcula quanto o usuário economizou
    const economia = total - tDesconto;

    // Exibe os resultados na tela
    document.getElementById('faixa').textContent = faixaTexto;
    document.getElementById('valorOriginal').textContent = formatarMoeda(total);
    document.getElementById('percentual').textContent = percentual + '%';
    document.getElementById('economia').textContent = formatarMoeda(economia);
    document.getElementById('totalFinal').textContent = formatarMoeda(tDesconto);

    document.getElementById('resultado').classList.add('ativo');
}

// Permite calcular com a tecla Enter
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcular();
});