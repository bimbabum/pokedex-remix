import { Link } from "remix"

export default function SearchResults({data}){
    return (
        <div className='flex items-center p-3'>
            <div className='basis-1/4'></div>
            <div className='relative basis-3/4'>
                <div className='absolute -top-6 z-10 w-full'>
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

// <ul className='absolute -top-6 z-10 w-full'>
// {data && data.map( search => (
// <li 
//     key={search.id}
//     className='px-2 py-2 border border-1 rounded-md bg-white max-w-2xl'
// >
//     <Link 
//         to={`/pokemons/${search.id}`}
//         className='border border-black w-full'
//     >{search.name}</Link>
// </li>
// ))}
// </ul>  