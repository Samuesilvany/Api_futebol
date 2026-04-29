import fs from "fs/promises";


import  app  from './src/config/times.json';
import { assert } from "console";


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});