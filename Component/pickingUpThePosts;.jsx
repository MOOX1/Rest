import React, { useEffect, useState } from "react";
import Post from "./post";

const PickingUpThePosts = () => {
  const [itens, setItens] = useState([])

  function atualizarItem(id, novoTitulo) {
    const novosItens = itens.map((item) => {
      if (item.id === id)
        return { id: item.id, userId: item.userId, title: novoTitulo };
      else return item;
    });
    setItens(novosItens);
  }

  function resetItem() {
    GetUsers();
  }

  useEffect(() => {
    GetUsers()
  }, [])
  const GetUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then(data => {
        setItens(data.slice(0, 10))
      })
      .catch(error => {
        alert(`Holve um erro ${error}`)
      })
  }


  return (
    <div>
      <button onClick={resetItem}> reset </button>
      <ul id="list">
        {itens.map((item, index) => (
          <li key={index}>
            <Post title={item.title}
              id={item.id}
              userid={item.userId}
              atualizarItem={atualizarItem}
            />
          </li>))
        }
      </ul>
    </div>
  )
}

export default PickingUpThePosts;