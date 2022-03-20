import { Link, useTransition } from "remix"

export default function SearchResults({data}){
    const transition = useTransition()

    return (
        <div className='flex items-center p-3'>
            <div className='basis-1/4'></div>
            <div className='relative basis-3/4'>
                <div className='absolute -top-6 z-10 w-full'>
                    {transition.state==='submitting' ? 
                            <div className='h-10 px-2 py-2 border border-1 rounded-md bg-white max-w-2xl flex items-center hover:border-gray-500 '>
                                <img src={require('../img/three-dots.svg')} alt='loading' className='h-2'/>
                            </div>
                            : null 
                    }
                    {data && data.map( search => (
                        <Link 
                            key={search.id}
                            to={`/pokemons/${search.id}`}
                            className='px-2 py-2 border border-1 rounded-md bg-white max-w-2xl block hover:border-gray-500'
                        >{search.name}</Link>
                    ))}
                    
                </div>   
            </div>
        </div>
    )
}