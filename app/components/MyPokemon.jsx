import { useOutletContext, Link } from "remix";
import {capitalFirstLetter} from '../utils'

export default function MyPokemon(){
    const {pokemonOwned} = useOutletContext()
    const pokemonArr = Array.from(pokemonOwned.values())
    return (
        <div className='flexContainer'>
            <h2 className='title m-auto'>Pokemon Owned</h2>
            <div>
                {pokemonArr.map(pokemon=> <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
            </div>
        </div>
    )
}

function PokemonCard({pokemon}){
    return (
        <Link 
            to={`/pokemons/${pokemon.id}`} 
            className='rounded-md border border-1 drop-shadow-sm bg-white flex items-center hover:drop-shadow-xl mb-1'
        >
            <div className='px-4 py-1'>
                <img src={pokemon.url} alt={pokemon.name}/>
            </div>
            <div>
                <h3 className='uppercase font-bold'>{pokemon.name}</h3>
                {pokemon.types && pokemon.types.map((type,index) => (
                    <span 
                        key={index}
                        className={`border border-${type} rounded-lg px-2  py-1 m-1 hover:text-white hover:bg-${type}`}
                    >{capitalFirstLetter(type)}</span>)
                )}
            </div>
        </Link>
    )
}

{/* <span className={`border border-normal rounded-lg px-2  py-1 m-1 hover:bg-normal`}>a</span>
<span className={`border border-fire rounded-lg px-2  py-1 m-1 hover:bg-fire`}>a</span>
<span className={`border border-water rounded-lg px-2  py-1 m-1 hover:bg-water`}>a</span>
<span className={`border border-electric rounded-lg px-2  py-1 m-1 hover:bg-electric`}>a</span>
<span className={`border border-ice rounded-lg px-2  py-1 m-1 hover:bg-ice`}>a</span>
<span className={`border border-fighting rounded-lg px-2  py-1 m-1 hover:bg-fighting`}>a</span>
<span className={`border border-poison rounded-lg px-2  py-1 m-1 hover:bg-poison`}>a</span>
<span className={`border border-ground rounded-lg px-2  py-1 m-1 hover:bg-ground`}>a</span>
<span className={`border border-flying rounded-lg px-2  py-1 m-1 hover:bg-flying`}>a</span>
<span className={`border border-bug rounded-lg px-2  py-1 m-1 hover:bg-bug`}>a</span>
<span className={`border border-ghost rounded-lg px-2  py-1 m-1 hover:bg-ghost`}>a</span>
<span className={`border border-dark rounded-lg px-2  py-1 m-1 hover:bg-dark`}>a</span>
<span className={`border border-dragon rounded-lg px-2  py-1 m-1 hover:bg-dragon`}>a</span>
<span className={`border border-steel rounded-lg px-2  py-1 m-1 hover:bg-steel`}>a</span>
<span className={`border border-psychic rounded-lg px-2  py-1 m-1 hover:bg-psychic`}>a</span>
<span className={`border border-grass rounded-lg px-2  py-1 m-1 hover:bg-grass`}>a</span>
<span className={`border border-rock rounded-lg px-2  py-1 m-1 hover:bg-rock`}>a</span>
<span className={`border border-fairy rounded-lg px-2  py-1 m-1 hover:bg-fairy`}>a</span> */}

