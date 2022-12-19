export const Quote =({image,name,gender,species,status})=>{
    return(
        <blockquote className="card w-50">
           <img className="card-img-top" src={image} alt={name} />
            <p className="card-title">{name}</p>
            <footer className="blockquote-footer">{gender}</footer>
            <p className="car">{species}</p>
            <p>{status}</p>
            
            
         
        

        </blockquote>
    )
}