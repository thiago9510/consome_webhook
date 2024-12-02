"use strict";
// database.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.database1 = void 0;
// database.ts
exports.database1 = [
    {
        input: ["oi", "olá", "bom dia", "boa tarde", "boa noite", "hello", "hi", "hey"],
        categoria: "Saudação",
        resposta: "Olá! Como posso ajudá-lo hoje?"
    },
    {
        input: ["como você está?", "tudo bem?", "como vai?", "beleza?", "qual seu nome?"],
        categoria: "Saudação",
        resposta: "Estou bem, obrigado! E você?"
    },
    {
        input: ["suporte", "ajuda", "problema", "dúvida", "preciso de ajuda", "suporte financeiro"],
        categoria: "Suporte",
        resposta: "Estou aqui para ajudar! Como posso assisti-lo?"
    },
    {
        input: ["pagamento", "baixa", "não foi registrado", "não foi baixado", "problema com pagamento"],
        categoria: "Problema Financeiro",
        resposta: "Entendo, você está tendo problemas com o pagamento. Posso verificar diretamente com o banco e realizar a baixa, caso o pagamento tenha sido efetuado."
    },
    {
        input: ["status", "informações", "atualizações", "situação"],
        categoria: "Status",
        resposta: "Você pode consultar o status do seu pagamento ou solicitar uma atualização."
    }
];
exports.database = [
    {
        input: ["oi", "olá", "bom dia", "boa tarde", "boa noite", "hello", "hi", "hey"],
        categoria: "Saudação",
        resposta: "Olá! Como posso ajudá-lo hoje?",
        prioridade: 1 // Prioridade mais baixa
    },
    {
        input: ["como você está?", "tudo bem?", "como vai?", "beleza?", "qual seu nome?"],
        categoria: "Saudação",
        resposta: "Estou bem, obrigado! E você?",
        prioridade: 1 // Prioridade mais baixa
    },
    {
        input: ["suporte financeiro", "problema com pagamento", "não foi baixado", "pagamento não registrado"],
        categoria: "Problema Financeiro",
        resposta: "Entendo, você está tendo problemas com o pagamento. Posso verificar diretamente com o banco e realizar a baixa, caso o pagamento tenha sido efetuado.",
        prioridade: 3 // Prioridade mais alta
    },
    {
        input: ["suporte", "ajuda", "problema", "dúvida"],
        categoria: "Suporte",
        resposta: "Estou aqui para ajudar! Como posso assisti-lo?",
        prioridade: 2 // Prioridade média
    }
];
