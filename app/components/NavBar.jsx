import SearchBar from './SearchBar'
import { Link } from 'remix'
import { supabase, loginWithGoogle, logout } from '~/lib/supabase'

export default function NavBar({children}){

    return (
        <>
            <nav className='flex items-center border border-b-1 p-3 bg-white'>
                <div className='font-primary text-2xl basis-1/4 tracking-wider'>
                    <Link to='/'>Pokedex</Link>
                </div>
                <SearchBar/>
            </nav>
            {children} 
        </>
            
    )
}