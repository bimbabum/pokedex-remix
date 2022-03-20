import { capitalFirstLetter,roundToFive } from "../utils"
import {useState} from 'react'

export default function PokemonDetail({pokemon}){
    const [showStats, setShowStats] = useState(true)
    const overview = [
        {name: 'Base Experience', value: pokemon.baseExperience},
        {name: 'Height', value: pokemon.height},
        {name: 'Weight', value: pokemon.weight} 
    ]

    const StatComponent = ({stat}) => {
        const maxNum = Math.max(...pokemon.stats.map(stat => stat.base_stat))
        const roundStat = roundToFive(Number.parseInt(stat.base_stat),maxNum)
        return (
            <div className='flex items-center p-1'>
                <div className='w-1/3 text-sm md:text-md md:w-1/6 text-right pr-4 flex-shrink'>
                    <span>{capitalFirstLetter(stat.stat.name)} {stat.base_stat}</span>
                </div>
                <div className={`w-80 md:w-96 h-4 border rounded-sm border-gray-500 bg-linear${roundStat}`}></div>
            </div>
        )
    }

    return (
        <>
            {/* overview */}
            <div className='flexContainer mt-3'>
                <h2 className='title'>{pokemon.name} <span className='text-gray-200 text-bold'>#{pokemon.id}</span></h2>
                <div className='flex items-center pt-3 pb-6'>
                    <div className='pr-3 w-44 md:w-64 lg:w-80 '>
                        <img 
                            src={pokemon.urlMain} 
                            alt={pokemon.name}
                            className='object-cover'   
                            />
                    </div>
                    <div className='flex-grow md:pl-5' >
                        <div className='py-3 pl-10'>
                            {pokemon.types.map((type,index) => (
                                <span 
                                    key={index}
                                    className={`type border-${type} hover:bg-${type}`}
                                >{capitalFirstLetter(type)}</span>)
                            )}
                        </div>
                        <table className='font-normal text-lg'>
                            <tbody>
                                {overview.map(ele => (
                                    <tr key={ele.name}>
                                        <th className='text-right pr-3 font-normal'>{ele.name}</th>
                                        <th className='font-normal text-left'>{ele.value}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* detail stats & moves */}
            <div>
                <div className='px-8 md:px-32 lg:px-52'>
                    <button 
                        className={`px-2 py-1 w-20 font-bold ${showStats? 'bg-gray-200':'border-t border-l gorder-gray-200'}`}
                        onClick = {()=>setShowStats(true)}
                    >
                        Stats
                    </button>
                    <button 
                        className={`px-2 py-1 w-20 font-bold ${showStats? 'border-t border-r border-gray-200':'bg-gray-200'}`}
                        onClick = {()=>setShowStats(false)}
                    >
                        Moves
                    </button>
                </div>
                {/* STATS */}
                <div className={`bg-gray-200 flex flex-col py-6 ${showStats? 'block' : 'hidden'}`}>
                    {pokemon.stats.map((stat,index)=> <StatComponent stat={stat} key={index}/>)}
                </div>

                {/* MOVES */}
                <div className={`bg-gray-200 py-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 p-6 md:px-32 ${showStats? 'hidden' : 'block'}`}>
                    {pokemon.moves.map((move,index)=> <MoveCard move={move} key={index}/>)}
                </div>
            </div>
        </>
    )
}

function MoveCard({move}) {
    return (
        <div className='rounded-md p-5 bg-white drop-shadow-sm'>
            <span className='block font-bold text-lg'>{capitalFirstLetter(move.move.name)}</span>
            <span>Level: {move.version_group_details[0].level_learned_at}</span>
        </div>
    )
}
