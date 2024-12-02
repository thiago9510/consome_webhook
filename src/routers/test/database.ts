// database.ts

export interface DatabaseEntry {
  input: string[];
  categoria: string;
  resposta: string;
}


export const database = [
    {
        input: ["oi", "olá", "bom dia", "boa tarde", "boa noite", "hello", "hi", "hey"],
        categoria: "Saudação",
        resposta: "Olá!",
        prioridade: 1  // Prioridade mais baixa
    },
    {
        input: ["como você está?", "tudo bem?", "como vai?", "beleza?", "qual seu nome?"],
        categoria: "Saudação",
        resposta: "Estou bem, obrigado! E você?",
        prioridade: 1  // Prioridade mais baixa
    },

    {
        input: ["suporte financeiro", "problema com pagamento", "não foi baixado", "pagamento não registrado"],
        categoria: "Problema Financeiro",
        resposta: "Entendo, você está tendo problemas com o pagamento. Posso verificar diretamente com o banco e realizar a baixa, caso o pagamento tenha sido efetuado.",
        prioridade: 3  // Prioridade mais alta
    },
    {
        input: ["suporte", "ajuda", "problema", "dúvida"],
        categoria: "Suporte",
        resposta: "Estou aqui para ajudar! Como posso ajudá-lo hoje?",
        prioridade: 2  // Prioridade média
    }
];