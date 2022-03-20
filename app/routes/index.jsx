import { useLoaderData} from 'remix'
import {searchPokemon} from '../pokemonAPI/pokemon'
import SearchResults from '../components/SearchResults'
import MyPokemon from '../components/MyPokemon'


export const loader = (props) => {
  const url = new URL(props.request.url)
  const searchQuery = url.searchParams.get('search')
  return searchPokemon(searchQuery)
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      <SearchResults data={data}/>
      <MyPokemon/>
    </div>
  )
}
