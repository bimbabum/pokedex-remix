import {client} from '~/lib/graphql-client'
import {gql} from 'graphql-request'
import { json } from 'remix'

//query
const searchPokemonquery = gql`
    query searchPokemon($searchQuery: String!) {
        pokemon_v2_pokemon(where: {name: {_like: $searchQuery}}) {
            id
            name
        }
}
`

const searchPokemon = async(searchQuery)=> {
    if (!searchQuery) return null
    const {pokemon_v2_pokemon} = await client.request(searchPokemonquery, {searchQuery: `${searchQuery.toLowerCase()}%`})
    return pokemon_v2_pokemon
}

const getPokemon = async(id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const jsonRes = await response.json()
    const data = {
        name: jsonRes.name,
        id: jsonRes.id,
        url: jsonRes.sprites.front_default,
        abilities: jsonRes.abilities.map(ability => ability.ability.name),
        moves: jsonRes.moves,
        stats: jsonRes.stats,
        types: jsonRes.types.map(type => type.type.name),
        baseExperience: jsonRes.base_experience,
        height: jsonRes.height,
        weight: jsonRes.weight,
        urlMain: jsonRes.sprites.other.dream_world.front_default
    }
    return data
}

export {
    searchPokemon,
    getPokemon
}