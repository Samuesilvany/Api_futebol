// Mock simples de conexão DB para projeto Node.js básico
// Nível iniciante, sem libs externas

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'futebol_db',
  user: 'user',
  password: 'pass'
};

// Função mock para simular conexão
function connectDB() {
  console.log('Conectado ao banco mock:', dbConfig.database);
  return {
    query: (sql) => {
      console.log('Query executada (mock):', sql);
      return Promise.resolve([]);
    }
  };
}

export { dbConfig, connectDB };

