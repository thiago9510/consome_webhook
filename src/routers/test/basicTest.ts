import { database } from './database';

/**
 * Função para processar a mensagem e identificar palavras-chave.
 * @param {string} mensagem - Mensagem recebida do usuário.
 * @returns {string} Resposta personalizada com base na mensagem.
 */
export const processarMensagem = (mensagem: string): string => {
    const mensagemLower = mensagem.toLowerCase().trim();
    let resposta: string[] = [];
    let prioridadeMaxima = 0;

    // Função para verificar se a mensagem contém palavras-chave específicas
    const verificarPalavrasChave = (lista: string[], mensagem: string): boolean => {
        return lista.some(palavra => mensagem.includes(palavra));
    };

    // Procurando palavras-chave no banco de dados e identificando a categoria com maior prioridade
    database.forEach(entry => {
        // Verifica se a mensagem contém alguma palavra-chave da entrada
        if (verificarPalavrasChave(entry.input, mensagemLower)) {
            // Se encontrar uma correspondência, compara a prioridade
            if (entry.prioridade > prioridadeMaxima) {
                resposta = [entry.resposta];  // Resposta da categoria com maior prioridade
                prioridadeMaxima = entry.prioridade;  // Atualiza a prioridade máxima
            }
        }
    });

    // Se não encontrar nenhuma correspondência, retorna uma resposta padrão
    if (resposta.length === 0) {
        resposta.push("Desculpe, não entendi sua solicitação. Pode me dar mais detalhes?");
    }

    return resposta.join(" ");
};

// Testando a função
//console.log(processarMensagem("Oi, gostaria de suporte financeiro, pois meu pagamento não foi baixado"));
//console.log(processarMensagem("Olá, como posso consultar o status do meu pagamento?"));