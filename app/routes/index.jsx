import { useLoaderData, useOutletContext} from 'remix'
import {searchPokemon} from '../pokemonAPI/pokemon'
import SearchResults from '../components/SearchResults'
import MyPokemon from '../components/MyPokemon'
import { loginWithGoogle, logout, supabase } from '~/lib/supabase'
import {useEffect, useState} from 'react'


export const loader = (props) => {
  const url = new URL(props.request.url)
  const searchQuery = url.searchParams.get('search')
  return searchPokemon(searchQuery)
}

export default function Index() {
  const data = useLoaderData()
  const {user} = useOutletContext()
  return (
    <div>
      <SearchResults data={data}/>
      <div className='flex justify-end items-center'>
          {user ? <span className='font-primary text-lg'>{user.user_metadata.name}</span> : null}
          {user?
            <button onClick={logout} className='actionbtn p-1 mx-3'>Log Out</button>
            :
            <button onClick={loginWithGoogle} className='actionbtn p-1 mx-3'>Log In</button>
          }
      </div>
      <MyPokemon/>
    </div>
  )
}
