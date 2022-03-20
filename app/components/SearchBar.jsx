import { useSubmit} from 'remix'
import {useState} from 'react'


export default function SearchBar(){
    const [search, setSearch] = useState('')
    const submit = useSubmit()
    const handleClearSearch = () => {
      setSearch('')
      submit()
    }
    return(
      <>
        <div className='font-primary basis-3/4'>
            <form
                method='GET'
                autoComplete='off'
                onChange={e=> submit(e.currentTarget) }
                className = 'max-w-2xl relative'
            >
                <input
                placeholder='Search Pokemons'
                name='search'
                className='border border-1 rounded-xl relative w-full p-2 pl-9'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                <img 
                  src={require('../img/search_icon.svg')} 
                  alt=''
                  className='absolute top-0 py-2 px-2'
                />
                <span 
                  className={`absolute right-0 px-3 py-2  z-10 text-gray-600 cursor-pointer ${search? 'inline' : 'hidden'}`}
                  onClick={handleClearSearch}
                >x</span>
            </form>
        </div>
      </>
    )
}