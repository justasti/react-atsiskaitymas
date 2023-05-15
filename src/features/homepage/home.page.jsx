import { useSelector } from 'react-redux'

const Homepage = () => {
  const { cards, loading } = useSelector((state) => state.cards)
  return <div>{JSON.stringify(cards)}</div>
}
export default Homepage
