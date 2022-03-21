import {useState, useEffect} from 'react'
import { supabase } from '~/lib/supabase'

//Insert pokemon in supabase
const insertPokemon = async(pokemon) => {
  const result = await supabase
  .from('pokemon_own')
  .insert([
    {name: pokemon.name,
    pokemon_id: pokemon.id,
    types: pokemon.types,
    url: pokemon.url
    },
  ])
  if (result.error) {
    console.log(result.error)
  }
}

//Delete pokemon in supabase
const deletePokemon = async(id) => {
  const result = await supabase
  .from('pokemon_own')
  .delete()
  .eq('pokemon_id', id)
  if(result.error) {
    console.log(result.error)
  }
}


export function usePokemon(){
    const [pokemonOwned,setpokemonOwned] = useState(new Map())

    //fetch data from supabase
    const fetchData = async() => {
      const {data,error} = await supabase.from('pokemon_own').select('*')
      if (error) {
        console.log(error)
      }
      const dataMap = data.map(ele => [ele.pokemon_id, {
        name: ele.name,
        id: ele.pokemon_id,
        url: ele.url,
        types: ele.types
      }])
      setpokemonOwned(new Map(dataMap))
    }
    useEffect(()=>{
      fetchData()
    },[])
  
    const addPokemon = async(data) => {
      const newList = new Map(pokemonOwned)
      const newPokemon = {
        name: data.name,
        id: data.id,
        url: data.url,
        abilities: data.abilities,
        types: data.types
      }
      newList.set(data.id,newPokemon)
      setpokemonOwned(newList)
      insertPokemon(newPokemon)
    }
  
    const removePokemon = (id) => {
      const newList = new Map(pokemonOwned)
      newList.delete(id)
      setpokemonOwned(newList)
      deletePokemon(id)
    }
  
    const ownPokemon = (id) => {  
      if(pokemonOwned) return pokemonOwned.has(id)
      return false
    }
  
    return {pokemonOwned, addPokemon, removePokemon, ownPokemon}
  }


  // DATABASE USING LOCAL STORAGE
  // const setStorage = (list) => {
  //   window.localStorage.setItem('pokemonList', JSON.stringify(Array.from(list)))
  // }
  
  // export function usePokemon(){
  //   const [pokemonOwned,setpokemonOwned] = useState(new Map())

  //   useEffect(()=>{
  //     const storagePokemon = window.localStorage.getItem('pokemonList')
  //     storagePokemon && setpokemonOwned(new Map(JSON.parse(storagePokemon)))
  //   },[])
  
  //   const addPokemon = async(data) => {
  //     const newList = new Map(pokemonOwned)
  //     newList.set(data.id, {
  //       name: data.name,
  //       id: data.id,
  //       url: data.url,
  //       abilities: data.abilities,
  //       types: data.types
  //     })
  //     setpokemonOwned(newList)
  //     setStorage(newList)
  //   }
  
  //   const removePokemon = (id) => {
  //     const newList = new Map(pokemonOwned)
  //     newList.delete(id)
  //     setpokemonOwned(newList)
  //     setStorage(newList)
  //   }
  
  //   const ownPokemon = (id) => {  
  //     if(pokemonOwned) return pokemonOwned.has(id)
  //     return false
  //   }
  
  //   return {pokemonOwned, addPokemon, removePokemon, ownPokemon}
  // }