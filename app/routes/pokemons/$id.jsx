import {useLoaderData, useOutletContext, Link} from 'remix'
import {getPokemon} from '../../pokemonAPI/pokemon'
import { capitalFirstLetter } from '../../utils';
import PokemonDetail from '../../components/PokemonDetail';

const ball = require('../../img/pokemon_ball.png')

export function meta({data}) {
    if(!data) return {title: 'Pokedex'}
    return { title: `Pokedex | ${capitalFirstLetter(data.name)}` };
  }

export let loader = ({params})=> {
    const {id} = params
    return getPokemon(id)
}

export default function Pokemon(){
    const pokemon = useLoaderData()
    const {removePokemon, addPokemon, ownPokemon} = useOutletContext()
    // console.log(pokemon)
    return (
        <>
            <div className='flex px-8 md:px-32 lg:px-52 pt-3 justify-between'>
                <div>
                    {ownPokemon(pokemon.id)? 
                        <button 
                            onClick= {()=>removePokemon(pokemon.id)}
                            className='actionbtn' 
                        >Remove</button> 
                    :
                        <button 
                            onClick= {()=> addPokemon(pokemon)}
                            className='actionbtn'    
                        >Add</button>
                    }
                </div>
                <div className='flex items-center'>
                    <Link className='actionbtn w-20 text-center' to={`/pokemons/${pokemon.id-1}`}>Previous</Link>
                    <div className='w-12 px-2'>
                        <img src={ball} alt='' className='object-contain'/>
                    </div>
                    
                        <Link className='actionbtn w-20 text-center' to={`/pokemons/${pokemon.id+1}`}>Next</Link>
                </div>
            </div>
            
            <PokemonDetail pokemon={pokemon}/>
            
        </>
            
    )
}

