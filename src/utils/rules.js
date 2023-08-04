const matched = (cardLength, isMatched, setList, index, cardIndex) => {
  if(isMatched) {
    setList(prevList =>
      prevList.map((item, i) => ({
        ...item,
        active: i === index || i === cardIndex[0] ? item.active : item.active
      }))
    );
    return true
  } else {
    setTimeout(() =>
    setList(prevList =>
      prevList.map((item, i) => ({
        ...item,
        active: i === index || i === cardIndex[0] ? !item.active : item.active
      }))
    ), 1000);
  }
}

export default matched