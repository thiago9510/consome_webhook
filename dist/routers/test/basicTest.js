"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarMensagem = void 0;
// processMessage.ts
const database_1 = require("./database");
/**
 * Função para processar a mensagem e identificar palavras-chave.
 * @param {string} mensagem - Mensagem recebida do usuário.
 * @returns {string} Resposta personalizada com base na mensagem.
 */
const processarMensagem = (mensagem) => {
    const mensagemLower = mensagem.toLowerCase().trim();
    let resposta = [];
    // Função para verificar se a mensagem contém palavras-chave específicas
    const verificarPalavrasChave = (lista, mensagem) => {
        return lista.some(palavra => mensagem.includes(palavra));
    };
    // Flag para verificar se já foi encontrado um problema específico
    let problemaEspecificoEncontrado = false;
    // Procurando palavras-chave no banco de dados
    database_1.database.forEach(entry => {
        if (verificarPalavrasChave(entry.input, mensagemLower)) {
            // Se a categoria for 'Problema Financeiro', respondemos diretamente com uma solução mais específica
            if (entry.categoria === "Problema Financeiro") {
                // Se já encontrarmos um problema financeiro, evitamos respostas gerais
                resposta = [entry.resposta];
                problemaEspecificoEncontrado = true;
            }
            // Caso o problema não seja específico, adicionamos uma resposta mais genérica
            else if (!problemaEspecificoEncontrado) {
                resposta.push(entry.resposta);
            }
        }
    });
    // Se não encontrar nenhuma correspondência, adiciona uma resposta padrão
    if (resposta.length === 0) {
        resposta.push("Desculpe, não entendi sua solicitação. Pode me dar mais detalhes?");
    }
    return resposta.join(" ");
};
exports.processarMensagem = processarMensagem;
// Testando a função
//console.log(processarMensagem("Oi, gostaria de suporte financeiro, pois meu pagamento não foi baixado"));
//console.log(processarMensagem("Oi, tudo bem? Como posso verificar o status do meu pagamento?"));
