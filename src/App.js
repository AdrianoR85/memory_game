import { useEffect, useState } from 'react';
import './App.css';
import getPokemon from './api/connection';
import shuffleArray from './utils/shuffleArray';
import PokeCard from './components/pokecard';
import colors from './utils/colors';
import game from './utils/game';
import Scores from './components/scores';
import Button from './components/button';

function App() {
  const [list, setList] = useState([]);
  const [cardIndex, setCardIndex] = useState([]);
  const [player01Score, setPlayer01Score] = useState(0);
  const [player01Active, setPlayer01Active] = useState(true)
  const [player02Score, setPlayer02Score] = useState(0);
  const [player02Active, setPlayer02Active] = useState(true)
  const [countClick, setCountClick]= useState(0)
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(true);
  
const handleReset = () => {
  window.location.reload();
}

  useEffect(() => {
    if(loading) {
      const pokeNames = async () => {
      const names = await getPokemon();
      const shuffle = shuffleArray(names.map(name => ({...name, active: false})));
      setList(shuffle);
      setLoading(false);
    };
      
    pokeNames();
    }

  }, [list, loading]);

  const countClicked = () => {
    return 1
  }

  const handleCardClick = (index) => {
    const cardLength = cardIndex.length;
    const isMatched = game(cardLength, cardIndex, index, setList, setCardIndex, list, player01Active, setPlayer01Active)
    setClick(false)
    const sumClick = countClicked() + countClick
    setCountClick(sumClick)

    if(sumClick === 2) {
      if(isMatched) {
        if(player01Active) {
          const newPoint = player01Score + 1
          setPlayer01Score(newPoint)
        } else {
          const newPoint = player02Score + 1
          setPlayer02Score(newPoint)
        }
      } else {
        setPlayer01Active(!player01Active)
        setPlayer02Active(!player02Active)
      }

      setCountClick(0);
    }    
  };

  return (
    <div className="app">
      <h1>Pokedex Game</h1>

      <Scores score01={player01Score} score02={player02Score} style={player01Active}/>
      <Button  onClick={() => handleReset()}/>
      <section className='container'>
        {list.map((item, index) => (
          <PokeCard 
            img={item.image} 
            name={item.name} 
            color={colors[item.type]} 
            k={index}
            style={click ? false : item.active} 
            onClick={() => handleCardClick(index)}
            />
        ))}
      </section>
    </div>
  );
}

export default App;
