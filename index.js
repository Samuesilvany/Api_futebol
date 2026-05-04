// Script simples em Node.js para buscar nome de time por ID
// Requisitos: Node.js básico, sem bibliotecas externas
// Uso: node index.js 2  (imprime "Nome do time: Vitória")

import fs from 'fs';

function main() {
  try {
    // 1. Lê o arquivo JSON local "src/config/times.json"
    const dados = fs.readFileSync('./src/config/times.json', 'utf-8');
    
    // 2. Converte o JSON em array de objetos
    const times = JSON.parse(dados);

    // 3. Pega o ID digitado no terminal (ex: node index.js 2)
    const id = Number(process.argv[2]);

    // 4. Verifica se ID foi passado
    if (!id || isNaN(id)) {
      console.log('Erro: Você precisa passar um número. Exemplo: node index.js 2');
      process.exit(1);
    }

    // 5. Procura o time com o ID correspondente
    const time = times.find(t => t.id === id);

    // 6. Mostra o nome ou erro
    if (!time) {
      console.log(`Time com ID ${id} não encontrado.`);
    } else {
      console.log(`Nome do time: ${time.nome}`);
    }
  } catch (error) {
    console.log('Erro ao ler arquivo:', error.message);
  }
}

main();

