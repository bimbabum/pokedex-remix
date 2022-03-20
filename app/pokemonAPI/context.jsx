import {useState, useEffect} from 'react'

const setStorage = (list) => {
  window.localStorage.setItem('pokemonList', JSON.stringify(Array.from(list)))
}

export function usePokemon(){
    const [pokemonOwned,setpokemonOwned] = useState(new Map())

    useEffect(()=>{
      const storagePokemon = window.localStorage.getItem('pokemonList')
      storagePokemon && setpokemonOwned(new Map(JSON.parse(storagePokemon)))
    },[])
  
    const addPokemon = async(data) => {
      const newList = new Map(pokemonOwned)
      newList.set(data.id, {
        name: data.name,
        id: data.id,
        url: data.url,
        abilities: data.abilities,
        types: data.types
      })
      setpokemonOwned(newList)
      setStorage(newList)
    }
  
    const removePokemon = (id) => {
      const newList = new Map(pokemonOwned)
      newList.delete(id)
      setpokemonOwned(newList)
      setStorage(newList)
    }
  
    const ownPokemon = (id) => {  
      if(pokemonOwned) return pokemonOwned.has(id)
      return false
    }
  
    return {pokemonOwned, addPokemon, removePokemon, ownPokemon}
  }
