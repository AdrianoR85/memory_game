import './score.css'
export default function Scores(props) {
  return(
    <section className="score__container">
      <div className={props.style ? 'active' : ''}>
        <span className="score__player">Player 01</span>
        <span className="score__point">{props.score01}</span>
      </div>
      <div className={!props.style ? 'active' : ''}>
      <span className="score__player">Player 02</span>
        <span className="score__point">{props.score02}</span>
      </div>
    </section>
  )
}