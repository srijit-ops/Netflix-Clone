const API_KEY="49b81fc7e20a32f2f03a730948900138"

const requests=[
    {movieURL:`/discover/tv?api_key=${API_KEY}&with_networks=213`, title:"Netflix Originals",largeRow:true},
    {movieURL:`/trending/all/day?api_key=${API_KEY}`, title:"Trending Now",largeRow:false},
    {movieURL:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,title:"Top Rated",largeRow:false},
    {movieURL:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,title:"Popular Movies",largeRow:false},
    {movieURL:`/discover/movie?api_key=${API_KEY}&page=1&with_genres=28`, title:"Action Movies",largeRow:false},
    {movieURL:`/discover/movie?api_key=${API_KEY}&page=1&with_genres=53`,title:"Thriller Movies",largeRow:false },
    {movieURL:`/discover/movie?api_key=${API_KEY}&page=1&with_genres=10749`,title:"Romantic Movies",largeRow:false},
    {movieURL:`/discover/movie?api_key=${API_KEY}&page=1&with_genres=9648`,title:"Mystery Movies",largeRow:false},
    {movieURL:`/discover/movie?api_key=${API_KEY}&page=1&with_genres=99`,title:"Documentries",largeRow:false}
] //these are the end points, means the end parts of the whole request url which changes based on the different movie genres. like for hooror,if the end art is A, for the comedy the end part is B. so we are listing here the different 5 end points of 5 types of movie genres.
export default requests