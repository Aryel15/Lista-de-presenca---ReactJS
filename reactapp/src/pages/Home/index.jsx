import './style.css'
import { useState } from 'react';
import { Card } from '../../components/Card';

export function Home() {
  const [nameInvited, setNameInvited] = useState();
  const [cards, setCards] = useState([]);

  function handleAddCard(){
    const newCard = {
      name: nameInvited,
      time: new Date().toLocaleTimeString("pt-br", {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      })
    };

    setCards(prevstate => [...prevstate, newCard]);
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <div className="inputs">
        <input type="text" placeholder='Digite seu nome' onChange={e => setNameInvited(e.target.value)}/>
        <button type="button" onClick={ handleAddCard } >Adicionar</button>
      </div> 

      {
        cards.map(cards => <Card key={ cards.time } name={ cards.name } time={ cards.time } />)
      }


    </div>

  );
}

