import { useSelector } from 'react-redux'
import Card from './../card/card.component'

const CardsList = () => {
  const { cards, loading } = useSelector((state) => state.cards)

  return (
    <div className='cards_list'>
      {loading && <p>Loading...</p>}
      {cards?.length !== 0 &&
        cards?.map((card) => <Card key={card.id} card={card} />)}
      {cards.length === 0 && !loading && <h1>No cards found!</h1>}
    </div>
  )
}
export default CardsList
