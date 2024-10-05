import { useEffect, useState } from "react";

export default function App() {
  
  const [listar, setListar] = useState([]);

  useEffect(() => { 

    const  buscarUsuarios  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setListar(dados)
    }
    buscarUsuarios();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
        <ul>
              {listar.map(listar => (
                <li key={listar.id}>
                  <p>{listar.gender}</p>
                </li>
              ))}
            </ul>
        }
      </ul>
    </>
  );
}
