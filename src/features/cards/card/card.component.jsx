const Card = ({ card }) => {
  return (
    <div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}
export default Card
