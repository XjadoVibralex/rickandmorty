
import {useCounter, useFetch} from "../hooks"
import { LoadingQuote,Quote } from "./";



export const MultipleCustomeHooks = ()=>{

    const{counter,increment,decrement}=useCounter(1);

    const {data,isLoading,hasError}= useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {image,name,gender,species,status}= !!data && data;
   

    return(
        <>
            <h1>Rrick and Morty</h1>
            <hr />
           

            {
                isLoading
                ?<LoadingQuote/>
                :<Quote image={image} name={name} gender={gender} species={species} status={status}/>                  
            }

            <button
            onClick={()=>decrement()}
            className="btn btn-primary"
            >
                Prev
            </button>

            <button 
            onClick={()=>increment()} 
            className="btn btn-danger"
            disabled={isLoading}>
    
                Next
            </button>



        </>
    )
}