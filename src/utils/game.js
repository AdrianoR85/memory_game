import matched from "./rules";

const game = (cardLength, cardIndex, index, setList, setCardIndex, list) => {
  setList(prevList =>
    prevList.map((item, i) => ({
    ...item,
    active: i === index ? !item.active : item.active
    }))
  );
  
  setCardIndex([...cardIndex, index]);

  if(cardLength === 1) {
    const isMatched = list[index].name === list[cardIndex[0]].name
    matched(cardLength, isMatched, setList, index, cardIndex);
    setCardIndex([])

    return isMatched
  }
};

export default game