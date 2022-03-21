import { useSubmit} from 'remix'

export default function SearchBar(){
    const submit = useSubmit()

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
                />
                <img 
                  src={require('../img/search_icon.svg')} 
                  alt=''
                  className='absolute top-0 py-2 px-2'
                />
            </form>
        </div>
      </>
    )
}