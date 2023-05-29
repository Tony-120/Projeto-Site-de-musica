import React from "react";


//copyrigthzao de lei
const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-center py-3">
      <p>&copy; {year} Universidade São Judas tadeu - Grupo 20, Turma da Noite - Campus Mooca. Todos os direitos reservados.</p>
    </div>
  );
};

export default Copyright;
