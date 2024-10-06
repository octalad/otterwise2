import React from "react";

function AuthStatus() {
  const auth = { user: false };

  if (!auth.user) {
    return <p>Você não esta logado</p>;
  }
  return (
    <p>
      Bem Vindo {auth.user.name}! <button>Sair</button>
    </p>
  );
}

export default AuthStatus;
