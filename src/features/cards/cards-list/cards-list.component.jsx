import { useSelector } from 'react-redux'
import Card from './../card/card.component'

const CardsList = () => {
  const { cards, loading } = useSelector((state) => state.cards)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!cards.length && !loading && <h1>No cards found!</h1>}
      {cards?.length && cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  )
}
export default CardsList
