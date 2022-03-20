import { useOutletContext } from "build"

export default function AddRemoveBtn({data}) {
    const list = useOutletContext()
    return (
        <>
            {list.ownPokemon(data.id)? 
                <button 
                    onClick= {()=>list.removePokemon(data.id)}
                    className='border border-1 rounded-md p-1' 
                >Remove</button> 
            :
                <button 
                    onClick= {()=> list.addPokemon(data)}
                    className='border border-1 rounded-md p-1'    
                >Add</button>
            }
        </>
    )
}