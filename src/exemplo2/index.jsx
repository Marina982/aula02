import { useEffect, useState } from "react";

export default function App() {
  
  const [lista, setListar] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const valor = await fetch('https://fakestoreapi.com/products');
        const dados = await valor.json()           ;
        setListar(dados);
    }
    buscarUsuario();
  }, [])

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {lista.map(listar => (
          <li key={listar.Id}>
            <h2>{listar.title}</h2>
            <p>{listar.description}</p>
            <p>{listar.price}</p>
           
          </li>
        ))}
      </ul>
    </>
  );
}
