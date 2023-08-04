import './button.css'
export default function Button(props) {

  function newGame() {
    props.onClick();
  }

  return (
    <button onClick={newGame}></button>
  )
}