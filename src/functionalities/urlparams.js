import movieTrailer from "movie-trailer"

export async function getURLParams(film){
    const url= await movieTrailer(film?.name||film?.title||film?.id||film?.original_title||film?.original_name||"")
    if(url){
        const urlParams= new URLSearchParams(new URL(url).search) 
        return urlParams
    }else{
        return null
    }
}
