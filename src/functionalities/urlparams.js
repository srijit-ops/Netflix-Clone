import movieTrailer from "movie-trailer"
export async function getURLParams(film){
    console.log(film.name)
    const url= await movieTrailer(film?.name||film?.title||film?.id||film?.original_title||film?.original_name||"")
    console.log(film.name)
    console.log(url)
    if(url){
        const urlParams= new URLSearchParams(new URL(url).search) 
        return urlParams
    }else{
       
        return null
    }
    
    
}
