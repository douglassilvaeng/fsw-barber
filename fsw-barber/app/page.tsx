//SERVER COMPONENTS - RODA NO SERVIRDOR E NÃO NO NAVEGADOR,
//NAO É POSSIVEL USAR USESTATE, USEEFFECT, ETC INTERATIVIDADE COM O USUARIO
//MAS PODEMOS USAR BIBLIOTECAS DE TERCEIROS QUE RODAM NO SERVIDOR
//EXEMPLO: BIBLIOTECA PARA BUSCAR DADOS DE UMA API, CONEXAO COM BANCO DE DADOS, ETC

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-slate-500 text-center">Welcome to FSW Barber Shop</h1>
      <p className="text-center">Your one-stop destination for all your grooming needs.</p>
    </div>
  );
};

export default Home;