import './pokecard.css'

export default function PokeCard(props) {

  function game() {
    const index = props.k
    props.onClick(index); // Call the onClick function passed from the parent component
  }

  return (
    <div className='card' key={props.k} onClick={game}>
      <section
        id={props.k}
        className={`pokemon ${props.style ? 'on' : 'off'}`}
        style={{ backgroundColor: `${props.color}`}}
      >
        <div className='pokemon__image'>
          <img src={props.img} alt={props.name} className="image"/>
        </div>
        <div className='pokemon__name'>
          <h3 className="name">{props.name}</h3>
        </div>
      </section>
      <section className={`back ${!props.style ? 'on' : 'off'}`}>
      </section>
    </div>
  )
}