import { useOutletContext, Link, useLoaderData } from "remix";
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
                        className={`type border-${type} hover:bg-${type}`}
                    >{capitalFirstLetter(type)}</span>)
                )}
            </div>
        </Link>
    )
}
